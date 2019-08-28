import React from 'react';
import './App.css';
import Temas from './components/temas';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Crossword from './components/crossword/crossword';
import Question from './components/question';
import Questiontwo from './components/questiontwo';

function App() {
  return (
    <main className="container">
      <Router>
        <Route
          path="/"
          exact
          render={() => {
            return <Temas />;
          }}
        ></Route>
        <Route
          path="/crossword"
          exact
          render={() => {
            return <Crossword />;
          }}
        ></Route>
        <Route
          path="/pregunta1"
          exact
          render={() => {
            return <Question />;
          }}
        ></Route>
        <Route
          path="/pregunta2"
          exact
          render={() => {
            return <Questiontwo />;
          }}
        ></Route>
      </Router>
    </main>
  );
}

export default App;
