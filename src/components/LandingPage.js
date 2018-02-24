import React from 'react';
import QuizButton from './QuizButton';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizzes: ["Top 100 Board Games", "Top 100 Movies", "Top 100 Books", "Top 50 Albums"]
        }
    }
    
    render(){
        let quizButtons = this.state.quizzes.map((title, key) => {
            var titleConcat = title.replace(/\s+/g, '-');
            return <Link to={titleConcat}><QuizButton quizName={title} key={key}/></Link>;
        });

        return (
            <div className="landing-page">
                <h1>EssentialList</h1>
                <h2>Only The Best</h2>
                <hr />
                <div className="quizzes-area">
                    {quizButtons}
                </div>
            </div>
        )
    }

}