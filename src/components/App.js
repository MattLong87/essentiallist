import React, { Component } from 'react';
import LandingPage from './LandingPage';
import QuizPage from './QuizPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import '../css/reset.css'
import '../css/styles.css';

class App extends Component {
  render() {

    var quiz = {
      title: "Top 100 Board Games",
      verb: "played",
      selections: ["Puerto Rico", "Agricola", "Arkham Horror", "Pandemic", "Gloomhaven"]
    };

    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    );
  }
}

export default App;
