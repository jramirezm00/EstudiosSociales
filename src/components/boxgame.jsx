import React, { Component } from 'react';
import Footer from "./footer";
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
