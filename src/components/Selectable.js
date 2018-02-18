import React from 'react';

export default function Selectable(props){
    return (
        <div className="selectable" onClick={props.onClick}><span className="option-text">{props.number}. {props.option} {props.selected.toString()}</span></div>
    )
}