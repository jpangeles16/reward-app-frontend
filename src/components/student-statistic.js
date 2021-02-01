import React from 'react';
import PropTypes from 'prop-types';
import '../styles/student-statistic.css';

export class StudentStatistic extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Hello, {this.props.studentName}!
                    <br />
                    Your number of points is...
                    <br />
                    {this.props.studentScore}
                </p>
            </div>
        )
    }
}

StudentStatistic.propTypes = {
    studentName: PropTypes.string,
    studentScore: PropTypes.number
}