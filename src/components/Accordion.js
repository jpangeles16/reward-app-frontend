import React, {useState, useRef} from "react";
import {Chevron} from './Chevron';
import {StudentStatistic} from './student-statistic';
import '../styles/accordion.css';

export function Accordion(props) {

    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("accordion-icon")

    const content = useRef(null);

    function toggleAccordion() {
        setActive(active === "" ? 'active' : '');
        setHeight(active === "active" ? '0px' : `${content.current.scrollHeight}px`);
        setRotate(active === "active" ? "accordion-icon" :'accordion-icon rotate');
    }
    
    return (
        <div className="accordion-section">
            <button className={`accordion-button ${active}`} onClick={toggleAccordion}>
                <p className="accordion-title">{props.title}</p>
                <Chevron className={`${rotate}`} width={10} fill={"#777"} />
            </button>
            <div ref={content} style={{maxHeight: `${height}`}} className="accordion-content">
                <StudentStatistic studentName="John" studentScore={props.studentScore}/>
            </div>
        </div>
    );
}