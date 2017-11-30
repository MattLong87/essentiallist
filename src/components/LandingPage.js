import React from 'react';

import QuizButton from './QuizButton';

export default class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizzes: ["Top 100 Board Games", "Top 100 Movies", "Top 100 Books", "Top 50 Albums"]
        }
    }
    
    render(){
        let quizButtons = this.state.quizzes.map((title) => <QuizButton quizName={title} />);

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