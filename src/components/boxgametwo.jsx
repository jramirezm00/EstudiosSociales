import React, { Component } from "react";
import boxgame from "../css/boxgame.css";
import Header from "./header";
import Footer from "./footer";
import NavBar from "./navBar";
import Questiontwo from "./questiontwo";
import Titletwo from "./titletwo";
import InfoTitle from "./infoTitle";

class Boxgametwo extends Component {
  render() {
    return (
      <div className="content">
        <div className="box">
          <InfoTitle />
          <div className="game">
          <Titletwo />
            <Questiontwo />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Boxgametwo;
