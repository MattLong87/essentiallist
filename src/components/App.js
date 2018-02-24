import React, { Component } from 'react';
import LandingPage from './LandingPage';
import QuizPage from './QuizPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import quizzes from './quizzes';

import '../css/reset.css'
import '../css/styles.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quizzes: quizzes()
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
