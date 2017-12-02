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
        selections: [
                {
                    option: "Settlers of Catan",
                    selected: false
                },
                {
                    option: "Puerto Rico",
                    selected: false
                }
            ]
        }
    }
    */
    constructor(props){
        super(props);
        this.state = {
            selections: this.props.quiz.selections.map((option) => {
                let result = {option};
                result['selected'] = false;
                return result;
            })
        }
        // This binding is necessary to make `this` work in the callback
        //this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    // handleOptionClick(key){
    //     this.setState(prevState => ({

    //     }))
    // }
//need to rebuild state so selections are not an array, so we can update just one of them instead of whole array
    render(){

        let selectables = this.state.selections.map((selection, key) => (
            <Selectable 
                key={key} 
                number={key+1} 
                option={selection.option} 
                selected={selection.selected} 
                //onClick={handleOptionClick(key)}
            />)
        )

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