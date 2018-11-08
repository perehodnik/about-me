import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';
import Main from './Main';
import $ from 'jquery'; 

class App extends Component {
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  // handleScroll() {
  //   $("nav").removeClass("test");
  //   clearTimeout($.data(this, 'scrollTimer'));
  //   $.data(this, 'scrollTimer', setTimeout(function() {
  //         $("nav").addClass("test");
  //         console.log("Haven't scrolled in 250ms!");
  //     }, 250));
  // }

 

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Main/>
        </div>
      </Router>
    );
  }
}

export default App;
