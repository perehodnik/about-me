import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter  } from "react-router-dom";
import pdf from './CV.pdf';
import ScrollIntoView from 'react-scroll-into-view';


const Navbar = () => (
        <nav className="navbar navbar-dark bg-main fixed-top">
            <div className="logo">
                MAXAT ABISHEV
            </div>
            <div>
                <ul className="navbar-list">
                    <li className="navbar-link">
                        <ScrollIntoView className="inline" selector="#home">
                            Home
                        </ScrollIntoView>                    
                    </li>
                    <li className="navbar-link">
                        <ScrollIntoView className="inline" selector="#about">
                            About
                        </ScrollIntoView>
                    </li>
                    <li className="navbar-link">
                        <ScrollIntoView className="inline" selector="#portfolio">
                            Portfolio
                        </ScrollIntoView>
                    </li>
                    <a className="navbar-link" target="_blank" href={pdf}>Resume</a>
                </ul>
            </div>
        </nav>
);

export default withRouter(Navbar);