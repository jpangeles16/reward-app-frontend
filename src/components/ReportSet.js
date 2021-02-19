import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar} from './ProgressBar';
import '../styles/report-set.css';
import monkey from '../images/monkeyman.jpg';

const RANKS = [
  'an apprentice',
  'a beginner',
  'a learner',
  'an associate learner',
  'an advanced learner',
  'a master learner',
  'an expert learner',
  'an out of this world learner.  You broke the scale'
]

export function ReportSet(props) {

  function determineRank(points) {
    if (points <= 10)
      return RANKS[0];
    else if (points > 10 && points <= 20)
      return RANKS[1];
    else if (points > 20 && points <= 30)
      return RANKS[2];
    else if (points > 30 && points <= 40)
      return RANKS[3];
    else if (points > 40 && points <= 50)
      return RANKS[4];
    else if (points > 50 && points <= 60)
      return RANKS[5];
    else if (points > 60 && points <= 70)
      return RANKS[6];
    else
      return RANKS[7];
  }

  return (
      <section>
        <header>
          <h1>Hello, {props.tutee}!</h1>
        </header>
        <div className="report-data grid-container">
          <div className="one">
            <img src={monkey}/>
          </div>
          <div className="two">
            <p className="total-points-paragraph">{props.points}</p>
          </div>
          <div className="three">
            <p className="advice-paragraph">Keep up the good work, {props.tutee}!</p>
          </div>
          <div className="four">
            <ProgressBar totalPoints={props.points} />
          </div>
            <br />          
        </div>
      </section>
    );
}

ReportSet.propTypes = {
  tutee: PropTypes.string,
  points: PropTypes.number
}