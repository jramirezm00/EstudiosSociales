import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  return (
    <main className="container">
      <div>
        <h1 className="text-center">Menu de Juegos</h1>
        <hr className="style1" />
        <ul
          className="list-group list-group-horizontal-lg  d-flex align-items-center justify-content-center"
          style={{ cursor: 'pointer' }}
        >
          <li className="list-group-item ">
            <Link to="/">Home</Link>
          </li>
          <li className="list-group-item ">
            <Link to="/crossword">Crucigrama</Link>
          </li>
          <li className="list-group-item ">
            <Link to="/question1">Pregunta1</Link>
          </li>
          <li className="list-group-item ">
            <Link to="/question2">Pregunta2</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Menu;
