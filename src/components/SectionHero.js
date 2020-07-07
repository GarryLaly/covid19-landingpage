import React from 'react';
import virusLogo from '../assets/images/virus-logo.png';
import hero from '../assets/images/hero.png';

function SectionHero() {
  const menus = ['Overview', 'Contagion', 'Symptomps', 'Prevention'];

  return (
    <div className="bg-red-100">
      <nav className="flex flex-col xl:px-40 xl:pt-8 xl:flex-row justify-between navbar">
        <div className="flex-1 py-4 lg:py-0">
          <div className="flex justify-center xl:justify-start items-center">
            <div className="flex-initial cursor-pointer">
              <img className="w-10" alt="virus-logo" src={virusLogo} />
            </div>
            <div className="flex-initial pl-2 cursor-pointer">
              <span className="font-semibold text-sm tracking-widest primary-text-color">COVID-19</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
            <div className="flex flex-col xl:flex-row items-center justify-end">
              <ul className="flex">
                {
                  menus.map((val, idx) => 
                    <li key={idx} className={
                      `mr-2 md:mr-6 text-left text-xs xxl:text-lg cursor-pointer ${idx === 0 ? 'text-red-600 active' : 'primary-text-color hover:text-red-600'}`
                    }>
                      <a href="#!">{val}</a>
                    </li>
                  )
                }
              </ul>
              <div className="text-left mt-2 xl:mt-0">
                <button className="btn-rounded btn-transparent capitalize text-xs xxl:text-lg">contact</button>
              </div>
            </div>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row mt-10">
        <div className="md:w-3/6 items-center text-center xl:text-left">
          <div className="pt-10 md:pt-0 xl:pt-40 px-3 xl:pl-40">
            <h3 className="font-semibold text-lg xl:text-xl secondary-text-color capitalize">COVID-19 alert</h3>
            <h1 className="font-semibold text-xl xl:text-4xl primary-text-color capitalize">stay at home quarantine</h1>
            <h1 className="font-semibold text-xl xl:text-4xl primary-text-color capitalize">to stop corona virus</h1>
            <p className="text-gray-700 mt-4 leading-loose capitalize">there is no specific medicine to prevent or treat coronavirus disease (covid-19). people may need supportive care to.</p>
            <div className="mt-8">
              <button className="btn-rounded btn-red py-4 capitalize">let us help</button>
            </div>
          </div>
        </div>
        <div className="md:w-3/6">
          <img className="w-full" alt="hero" src={hero} />
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
