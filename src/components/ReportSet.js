import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar} from './ProgressBar';
import '../styles/report-set.css';
import monkey from '../images/monkeyman.jpg';
import bear from '../images/bear.jpg';
import builder from '../images/builder.jpg';
import chimp from '../images/chimp.jpg';
import reptile from '../images/reptile.jpg';
import shrimp from '../images/shrimp.jpg';

const ANIMALS = [
  monkey, bear, builder, chimp, reptile, shrimp
]

export function ReportSet(props) {

  function selectRandomImage() {
    return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  } 

  return (
      <section>
        <header>
          <h1>Hello, {props.tutee}!</h1>
        </header>
        <div className="report-data grid-container">
          <div className="one">
            <img src={selectRandomImage()}/>
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