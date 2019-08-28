import React, { Component } from "react";
import boxgame from "../css/boxgame.css";

class Question extends Component {
  render() {
    return (
      <div className="question">
        <div className="boxquestion">
          Los estudios sociales son o se definen como el estudio de los aspectos
          más importantes de las personas que involucran el medio social donde
          habitan, trabajan y disfrutan de los espacios en común con el medio
          ambiente que los rodea.
        </div>

        <p>La afirmación anterior hace referencia a:</p>

        <div className="options">
          <button>Definición de Estudios Sociales</button>
          <button>La política del país</button>
          <button>La importancia de la escuela</button>
          <button>Concientiza sobre el medio ambiente</button>
        </div>

        <div className="answer">
          <button className="active">VER RESPUESTA</button>
          <button className="next">Siguiente Pregunta</button>
        </div>

        <img src="https://i.pinimg.com/originals/7f/e6/20/7fe62069a5bac04403b569177991c95a.png" />
      </div>
    );
  }
}

export default Question;