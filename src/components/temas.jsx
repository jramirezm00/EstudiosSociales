import React, { Component } from 'react';
import { getTemas } from '../services/temas';
import { getCategorias } from '../services/categorias';
import paginas from '../utils/paginas';
import ListGroup from '../components/listGroup';
import TemasTable from './temasTable';
import Pagination from './pagination';
import Header from './header';
import Footer from './footer';
import NavBar from './navBar';

class Temas extends Component {
  state = {
    temas: [],
    currentPage: 1,
    pageSize: 4,
    categorias: []
  };

  componentDidMount() {
    const categorias = [{ _id: '', nombre: 'Todas las Categorias' }, ...getCategorias()];
    this.setState({ temas: getTemas(), categorias });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategoriaSelect = categoria => {
    this.setState({ selectedCategoria: categoria, currentPage: 1 });
  };

  handleLike = tema => {
    const temas = [...this.state.temas];
    const index = temas.indexOf(tema);
    temas[index] = { ...temas[index] };
    temas[index].liked = !temas[index].liked;
    this.setState({ temas });
  };

  render() {
    const { pageSize, selectedCategoria, currentPage, temas: allTemas } = this.state;
    const filtered =
      selectedCategoria && selectedCategoria._id
        ? allTemas.filter(t => t.categoria._id === selectedCategoria._id)
        : allTemas;

    const temas = paginas(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div>
          <NavBar />
          <br />
          <Header className="m-2" />
          <hr className="style1" />
        </div>
        <div className="col-md-2 text-center">
          <ListGroup
            items={this.state.categorias}
            selectedItem={this.state.selectedCategoria}
            onItemSelect={this.handleCategoriaSelect}
          />
        </div>
        <div className="row">
          <div className="col m-2 text-dark">
            <p style={{ textAlign: 'center' }}>Se encontraron {filtered.length} temas</p>
            <TemasTable temas={temas} onLike={this.handleLike} />
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
        <hr className="style1" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Temas;
