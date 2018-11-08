import React from "react";
import {Pager} from "react-bootstrap";
import ScrollIntoView from 'react-scroll-into-view';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Home from './Home';
import Portfolio from "./Portfolio";
import "./index.css";


const Main = () => (
    <div>
      <Home />
      <About />
      <Portfolio />
    </div>
  );

  export default Main;