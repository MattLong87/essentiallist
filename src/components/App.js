import React, { Component } from 'react';
import LandingPage from './LandingPage';
import QuizPage from './QuizPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import '../css/reset.css'
import '../css/styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        quizzes: [
          {
            title: "Top 100 Board Games",
            verb: "played",
            selections: ["Puerto Rico", "Agricola", "Arkham Horror", "Pandemic", "Gloomhaven"]
          },
          {
            title: "Top 100 Movies",
            verb: "seen",
            selections: ["Citizen Kane", "No Country For Old Men", "Groundhog Day"]
          }
        ]
    }
  }

  render() {

    var routes = this.state.quizzes.map((quiz, key) => <Route exact path={"/" + quiz.title.replace(/\s+/g, '-')} render={()=><QuizPage quiz={quiz}/>}/>);
    var titles = this.state.quizzes.map((quiz, key) => quiz.title);

    return (
      <Router>
        <div>
          <Route exact path="/" render={()=><LandingPage titles={titles}/>} />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
