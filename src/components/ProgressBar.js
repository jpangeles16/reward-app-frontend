import React from 'react';
import '../styles/progress-bar.css';

function determineLevel(points) {
    if (points < 14)
      return 0;
    else if (points >= 15 && points <= 29)
      return 1;
    else if (points >= 30 && points <= 44)
      return 2;
    else if (points >= 45 && points <= 59)
      return 3;
    else if (points >= 60 && points <= 74)
      return 4;
    else if (points >= 75 && points <= 90)
      return 5;
    else return 6;
  }


export function ProgressBar({totalPoints}) {
    const [style, setStyle] = React.useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${totalPoints}%`
        }
        setStyle(newStyle);

    }, 1000);

    return (
        <div className="progress-div">
            <p className="level">Level: {determineLevel(totalPoints)}</p>
            <div className="progress">
                <div className="progress-done" style={style}>
                    {totalPoints}
                </div>
            </div>
            <p className="level">{`${totalPoints} / ${100 - totalPoints}`}</p>
        </div>

    )
}