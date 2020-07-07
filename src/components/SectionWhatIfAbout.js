import React from 'react';
import about from '../assets/images/about.png';
import aboutvirus from '../assets/images/about-virus.png';

function SectionWhatIfAbout() {
  return (
    <div className="bg-gradient-pink-to-white sec-about">
      <div className="flex flex-col items-center md:flex-row relative mt-12" >
        <div className="lg:w-3/6 items-center z-10">
          <img alt="about" src={ about } />
        </div>
        <div className="lg:w-3/6 items-center text-center lg:text-left px-4 lg:px-24 z-10">
          <h3 className="text-xl font-semibold secondary-text-color capitalize">What Is Covid-19</h3>
          <h1 className="text-4xl font-semibold primary-text-color capitalize">Coronavirus</h1>
          <p className="text-sm leading-loose text-gray-700 mt-4 capitalize">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</p>
          <div className="mt-8">
            <button className="btn-rounded bg-red-200 capitalize btn-learn-more">Learn More</button>
          </div>
        </div>

        <img className="absolute bottom-0 right-0 z-0 w-32 mb-10" alt="about-virus" src={ aboutvirus } />
      </div>
    </div>
  );
}

export default SectionWhatIfAbout;
