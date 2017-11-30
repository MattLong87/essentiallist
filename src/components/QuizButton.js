import React from 'react';

export default function QuizButton(props){
    return (
        <div className="quiz-button"><span className="quiz-name">{props.quizName}</span></div>
    )
}