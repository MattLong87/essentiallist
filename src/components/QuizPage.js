import React from 'react';
import Selectable from './Selectable';

/*
QuizPage Props takes "quiz" parameter:

quiz = {
    title: string
    verb: string
    selections: [string]
}

*/

import '../css/quiz-styles.css';

export default class QuizPage extends React.Component {
    /*
    this.state = {
        1: {option: "Puerto Rico", selected: false},
        2: {option: "Gloomhaven", selected: false}
    }
    */
    constructor(props){
        super(props);
        this.state = {};
        this.props.quiz.selections.forEach((option, key) => {
            this.state[key + 1] = {option, selected: false};
        })
    }

    handleOptionClick(key){
        let newObject = {}
        newObject[key] = this.state[key];
        newObject[key]["selected"] = !newObject[key]["selected"];
        this.setState(newObject);
    }

    render(){
        let selectables = [];
        for (var entry in this.state){
            selectables.push(
                <Selectable
                    key = {entry}
                    number = {entry}
                    option = {this.state[entry]["option"]}
                    selected = {this.state[entry]["selected"]}
                    onClick = {this.handleOptionClick.bind(this, entry)}
                />
            )
        }

        return (
            <div className="quiz-page">
                <div className="quiz-header">
                    <span className="quiz-title">{this.props.quiz.title}</span>
                    <span className="quiz-subhead">How many have you {this.props.quiz.verb}?</span>
                </div>
                <div className="quiz-selections">
                    {selectables}
                </div>
            </div>
        )
    }
}