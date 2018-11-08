import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const About = () => (
        <div id="about" className="about component-container">
            <div className="about-header">About me</div> 
            <hr></hr>
            <div className="about-text">
            <p>
                After spending 7+ years in computer networking industry, I've decided to switch careers towards software development.
                What I like about software development is the level of feedback the developer gets from the work:
            </p>  
            <p>
                Develop a product <i class="fas fa-code"></i> => get some bugs <i class="fas fa-bug"></i> => identify and fix the bugs <i class="far fa-keyboard"></i> => get your portion of endorphins <i class="fas fa-grin-stars"></i>
            </p>
            <p>
                As part of getting job ready, I have some experience with <span>NodeJS/Express</span> and <span>MongoDB, React/redux</span>, and libraries like <span>jQuery, Bootstrap</span>, and plain <span>CSS/Javascript</span>. Apart from these, I have some hackerrank experience coding in <span>Python</span> and <span>Java</span>.
            </p>
            <p>
                I'm looking to kickstart my new career and landing a first web developer job - front, back or full-stack / intern, contract, full-time / paid, unpaid. 
            </p>
            </div>
        </div>
);

export default About;