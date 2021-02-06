import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from './Accordion';
import { ProgressBar} from './ProgressBar';
import '../styles/report-set.css';

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

  // const totalPoints = props.reports.map((report) =>
  //  report.points).reduce((accum, score) =>
  //   accum + score);

  // const accordions = props.reports.map((report, index) => 
  //   <Accordion key={index}
  //     title={`Report on ${report.date}`}
  //     studentScore={report.points} 
  //     content={"Test"} />
  // );

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
        {/* <div className="accordion-set">
          {accordions}
        </div> */}
        <div className="report-data">
          <p className="total-points-paragraph">Your total points are {props.points}!
            <br />          
           You are currently {determineRank(props.points)}!</p>
          <ProgressBar totalPoints={props.points} />
          <p className="total-points-paragraph">Keep up the good work, {props.tutee}!</p>
        </div>
      </section>
    );
}

ReportSet.propTypes = {
  tutee: PropTypes.string,
  points: PropTypes.number
}