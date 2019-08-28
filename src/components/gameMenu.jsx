import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  return (
    <main
      className="container"
      style={{ backgroundImage: 'url(' + require('../images/monsters.png') + ')' }}
    >
      <div>
        <h1 className="text-center">
          <i class="fa fa-grav" aria-hidden="true" />
          Menú de Juegos
          <i class="fa fa-grav" aria-hidden="true" />
        </h1>
        <hr className="style1" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ul
          className="list-group list-group-horizontal-lg  d-flex align-items-center justify-content-center"
          style={{ cursor: 'pointer' }}
        >
          <li className="list-group-item list-group-item-info ">
            <Link to="/">Home</Link>
          </li>
          <li className="list-group-item list-group-item-info">
            <Link to="/crossword">Crucigrama</Link>
          </li>
          <li className="list-group-item list-group-item-info">
            <Link to="/question1">Pregunta1</Link>
          </li>
          <li className="list-group-item list-group-item-info">
            <Link to="/question2">Pregunta2</Link>
          </li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </main>
  );
};

export default Menu;
