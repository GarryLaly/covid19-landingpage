import React from 'react';
import virusLogo from '../assets/images/virus-logo.png';
import hero from '../assets/images/hero.png';

function SectionHero() {
  const menus = ['Overview', 'Contagion', 'Symptomps', 'Prevention'];

  return (
    <div className="bg-red-100">
      <nav className="flex flex-col xl:flex-row pt-4 px-3 md:items-center">
        <div className="flex-1">
          <div className="flex xl:pl-56 justify-center xl:justify-start items-center">
            <div className="flex-initial cursor-pointer">
              <img className="w-10" alt="virus-logo" src={virusLogo} />
            </div>
            <div className="flex-initial pl-2 cursor-pointer">
              <span className="font-semibold text-base primary-text-color">COVID-19</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
            <div className="flex flex-col xl:flex-row items-center">
              <ul className="flex">
                {
                  menus.map((val, idx) => 
                    <li key={idx} className="mt-2 mr-2 md:mr-10 text-left font-small text-sm md:text-base primary-text-color cursor-pointer hover:text-red-600">
                      <span href="#">{val}</span>
                    </li>
                  )
                }
              </ul>
              <div className="text-left mt-2 xl:mt-0">
                <button className="btn-rounded btn-transparent capitalize">contact</button>
              </div>
            </div>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row mt-12">
        <div className="md:w-1/2 items-center">
          <div className="pt-10 md:pt-0 xl:pt-64 px-3 xl:pl-56">
            <p className="text-3xl text-left secondary-text-color capitalize">covid-19 alert</p>
            <p className="text-4xl font-semibold text-left primary-text-color capitalize">stay at home quarantine</p>
            <p className="text-4xl font-semibold text-left primary-text-color capitalize">to stop corona virus</p>
            <p className="font-light text-left mt-4 capitalize">there is no specific medicine to prevent or treat coronavirus</p>
            <p className="font-light pt-2 text-left capitalize">disease (covid-19). people may need supportive care to.</p>
            <div className="mt-8 text-left">
              <button className="btn-rounded btn-red capitalize">let us help</button>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <img className="w-full" alt="hero" src={hero} />
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
