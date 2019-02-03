import React, { Component } from 'react';
import Calculator from '../media/calculator.gif';
import WeightTracker from '../media/weightTracker.gif';


class Projects extends Component {
  render() {
    return (
      <div class="projects">
        <h1 class="header-text2">PROJECTS</h1>
          <p>React-Native Calculator</p>
          <img src={Calculator} />
          <p>React-Rails WeightTracker</p>
          <img src={WeightTracker} />
      </div>
    );
  }
}

export default Projects;
