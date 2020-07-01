import React from 'react';
import logo from './logo.svg';
import './App.css';

import SectionHero from './components/SectionHero';
import SectionWhatIfAbout from './components/SectionWhatIfAbout';
import SectionContagion from './components/SectionContagion';
import SectionSymptomps from './components/SectionSymptomps';
import SectionWhatShouldWeDo from './components/SectionWhatShouldWeDo';
import SectionHelpFooter from './components/SectionHelpFooter';

const App = () => {
  return (
    <div className="App">
      <SectionHero />
      <SectionWhatIfAbout />
      <SectionContagion />
      <SectionSymptomps />
      <SectionWhatShouldWeDo />
      <SectionHelpFooter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="p-16 bg-red-400">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
