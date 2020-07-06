import React from 'react';
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
    </div>
  );
}

export default App;
