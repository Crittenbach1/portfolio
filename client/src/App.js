import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import ProgrammingKnowledge from './components/ProgrammingKnowledge.js';
import Projects from './components/Projects.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <ProgrammingKnowledge />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
