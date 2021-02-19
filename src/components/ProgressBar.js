import React from 'react';
import '../styles/progress-bar.css';

export function ProgressBar({totalPoints}) {
    const [style, setStyle] = React.useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${totalPoints}%`
        }
        setStyle(newStyle);

    }, 2000);
    return (
        <div className="progress">
            <div className="progress-done" style={style}>
                {totalPoints}
            </div>
        </div>
    )
}