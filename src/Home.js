import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home = () => (
        <div id="home" className="home component-container">
            <div className="hello">Hello, I'm Maxat!</div>
            <div className="tagline">Aspiring Developer, Automation enthusiast</div>
            <div className="icons-social">
                <a target="_blank" href="https://github.com/perehodnik"><i className="fab fa-github fa-3x"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/maxat-abishev"><i className="fab fa-linkedin fa-3x"></i></a>
                <a target="_blank" href="https://www.hackerrank.com/maxatabishev"><i className="fab fa-hackerrank fa-3x"></i></a> 
            </div>
        </div>
);

export default Home;