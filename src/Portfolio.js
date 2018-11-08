import React, {Component} from 'react';
import Project from './Project';

const Portfolio = () => (
        <div id="portfolio" className="project-container component-container">
            <Project 
                title="TODO LIST"
                description="Todo list portal with authentication, named todo lists."
                icons={["fab fa-js", "fab fa-react", "fab fa-node"]}
                code="https://github.com/perehodnik/TodoList"
                demo="http://todolist.abishev.me"
            />
            <Project 
                title="PORTFOLIO"
                description="This very portfolio site, additional projects coming"
                icons={["fab fa-js", "fab fa-react"]}
                code="https://github.com/perehodnik"
                demo="http://abishev.me"
            />
        </div>
);

export default Portfolio;