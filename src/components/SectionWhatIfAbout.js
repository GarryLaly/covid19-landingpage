import React from 'react';
import about from '../assets/images/about.png';
import aboutvirus from '../assets/images/about-virus.png';

function SectionWhatIfAbout() {
  return (
    <div className="bg-gradient-pink-to-white sec-about">
      <div className="flex flex-col-reverse md:flex-row mt-12" >
        <div className="md:w-3/4 items-center">
          <img alt="about" src={ about } />
        </div>
        <div className="md:w-2/3 items-center pr-12">
          <p className="text-3xl text-left secondary-text-color capitalize mt-32">What Is Covid-19</p>
          <p className="text-4xl font-semibold text-left primary-text-color capitalize">Coronavirus</p>
          <p className="font-light text-left mt-4 capitalize">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of Critical Event Preparedness and Response</p>
          <div className="mt-8 text-left">
            <button className="btn-rounded bg-red-200 capitalize btn-learn-more">Learn More</button>
          </div>
        </div>
        <div className="md:w-1/5 items-center">
          <img className="mt-48" alt="about-virus" src={ aboutvirus } />
        </div>
      </div>
    </div>
  );
}

export default SectionWhatIfAbout;
