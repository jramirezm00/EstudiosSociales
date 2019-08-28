import React, { Component } from 'react';
import '../css/boxgame.css';
import { Link } from 'react-router-dom';
import Footer from './footer';

class Questiontwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="info">
            <h4>
              <a class="active" href="#">
                IV GRADO
              </a>
            </h4>

            <h5>JUEGO EDUCATIVO</h5>
          </div>

          <div className="game">
            <div className="title">
              <h5>Definición y su importancia en la vida cotidiana de los Estudios Sociales</h5>

              <h6>Pregunta 1</h6>
            </div>
            <div className="question">
              <div className="boxquestion">
                Desde la colonización española de América, es decir a partir del siglo XVI, en
                lengua española se llama así a los seres humanos nacidos de la unión entre una
                persona blanca (en general, durante la colonización de América, de ascendencia
                española o europea) y una persona negra.
              </div>

              <p>La afirmación anterior hace referencia a:</p>

              <div className="options">
                <button>Mulatos</button>
                <button>Pardos</button>
                <button>Criollos</button>
                <button>Mestizo</button>
              </div>

              <div className="answer">
                <button className="active">VER RESPUESTA</button>
              </div>
              <Link to="/menu">
                <button className="btn btn-info">VOLVER</button>
              </Link>
            </div>
            <img src="https://i.pinimg.com/originals/1b/c1/4f/1bc14ffe47477ac8a0a95d1f4bf24609.png" />
          </div>
        </div>
        <br></br>
        <hr className="style1" />
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Questiontwo;
