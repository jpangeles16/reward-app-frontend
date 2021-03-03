import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar} from './ProgressBar';
import '../styles/report-set.css';
import monkey from '../images/monkeyman.jpg';


export function ReportSet(props) {

  return (
      <section>
        <header>
          <h1>Hello, {props.tutee}!</h1>
        </header>
        <div className="report-data grid-container">
          <div className="one">
            <img src={monkey}/>
          </div>
          <div className="total-points-div">
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