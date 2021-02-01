import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from './Accordion';
import { ProgressBar} from './ProgressBar';
import '../styles/report-set.css';

export function ReportSet(props) {

  const totalPoints = props.reports.map((report) =>
   report.points).reduce((accum, score) =>
    accum + score);

  const accordions = props.reports.map((report, index) => 
    <Accordion key={index}
      title={`Report on ${report.date}`}
      studentScore={report.points} 
      content={"Test"} />
  );

  return (
      <section>
        <header>
          <h1>Hello, {props.tutee}!</h1>
        </header>
        <div className="accordion-set">
          {accordions}
        </div>
        <p className="total-points-paragraph">Your total points are {totalPoints}!</p>
        <ProgressBar totalPoints={totalPoints} />
        <p className="total-points-paragraph">Keep up the good work, {props.tutee}!</p>
      </section>
    );
}

ReportSet.propTypes = {
  tutee: PropTypes.string,
  reports: PropTypes.array
}