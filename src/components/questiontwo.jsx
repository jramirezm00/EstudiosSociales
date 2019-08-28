import React, { Component } from 'react';
import boxgame from '../css/boxgame.css';
import { Link } from 'react-router-dom';

class Questiontwo extends Component {
  render() {
    return (
      <div className="question">
        <div className="boxquestion">
          Desde la colonización española de América, es decir a partir del siglo XVI, en lengua
          española se llama así a los seres humanos nacidos de la unión entre una persona blanca (en
          general, durante la colonización de América, de ascendencia española o europea) y una
          persona negra.
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
          <Link to="/menu">
            <button className="next">VOLVER</button>
          </Link>
        </div>

        <img src="https://i.pinimg.com/originals/1b/c1/4f/1bc14ffe47477ac8a0a95d1f4bf24609.png" />
      </div>
    );
  }
}

export default Questiontwo;
