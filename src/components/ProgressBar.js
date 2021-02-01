import React from 'react';
import '../styles/progress-bar.css';

export function ProgressBar(props) {
    return (
        <div className="progress-bar" 
            data-label=""
            style={{"--width": props.totalPoints}}>

        </div>
    )
}