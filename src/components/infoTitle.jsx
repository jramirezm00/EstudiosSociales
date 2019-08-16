import React, { Component } from "react";
import boxgame from "../css/boxgame.css";

class InfoTitle extends Component {
  render() {
    return (
      <div>
        <div className="info">
          <h4>
            <a class="active" href="#">
              IV GRADO
            </a>
          </h4>

          <h5>JUEGO EDUCATIVO</h5>

          <h4>
            <a href="#">Regresar</a>
          </h4>
        </div>

        <div class="image">
          {/* <img src="https://i.pinimg.com/originals/4c/2e/40/4c2e40ea8d882e9c8958568b4516a0fd.jpg" /> */}
        </div>
      </div>
    );
  }
}

export default InfoTitle;
