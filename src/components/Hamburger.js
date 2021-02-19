import React from 'react';
import '../styles/hamburger.css';

export class Hamburger extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render() {
        return (
            <div className="dropdown">
                <button onClick={this.handleClick} className="dropbtn">Badges <i class="fa fa-caret-down"></i></button>
                <div id="myDropdown" className="dropdown-content">
                    <a>Level 1 - 15 points</a>
                    <a>Level 2 - 30 points</a>
                    <a>Level 3 - 45 points</a>
                    <a>Level 4 - 60 points</a>
                    <a>Level 5 - 75 points</a>
                    <a>Level 6 - 90 points</a>
                </div>
            </div>
        )
    }
}