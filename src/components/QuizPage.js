import React from 'react';

/*
QuizPage Props takes "quiz" parameter:

quiz = {
    title: string
    verb: string
    selections: [string]
}

*/

export default function QuizPage(props){

    let selectables = props.quiz.selections.map((selection, key) => <div className="selectable" key={key}><span className="option-text">{key+1}. {selection}</span></div>)

    return (
        <div className="quiz-page">
            <div className="quiz-header">
                <span className="quiz-title">{props.quiz.title}</span>
                <span className="quiz-subhead">How many have you {props.quiz.verb}?</span>
            </div>
            <div className="quiz-selections">
                {selectables}
            </div>
        </div>
    )
}