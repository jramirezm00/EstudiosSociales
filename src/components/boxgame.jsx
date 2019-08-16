import React, { Component } from "react";
import boxgame from "../css/boxgame.css";
import Header from "./header";
import Footer from "./footer";
import NavBar from "./navBar";
import Question from "./question";
import Title from "./title";
import InfoTitle from "./infoTitle";

class Boxgame extends Component {
  render() {
    return (
      <div className="content">
        <div className="box">
          <InfoTitle />
          <div className="game">
            <Title />
            <Question />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Boxgame;
