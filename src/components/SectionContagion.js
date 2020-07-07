import React from 'react';
import contagionVirus from '../assets/images/contagion-virus.svg';

const cards = [
  {
    id: 1,
    title: 'Air Transmission',
    text: 'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplif'
  },
  {
    id: 2,
    title: 'Human Contacts',
    text: 'Washing your hands is one of thesimplest ways you can protect'
  },
  {
    id: 3,
    title: 'Containted Objects',
    text: 'Use the tissue while sneezing,In this way, you can protect your droplets.'
  }
]

const cardComponent = data => (
  <div key={data.id} className="card z-10 relative max-w-xs rounded bg-white overflow-hidden shadow-xl my-2 lg:my-0 mx-2">
    <div className="h-48 flex items-center">
      <img className="w-1/2 mx-auto" src={`img/contagion-card-${data.id}.svg`} alt="Sunset in the mountains" />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold primary-text-color text-xl mb-2">{data.title}</div>
      <p className="text-gray-700 text-xs">{data.text}</p>
    </div>
    <div className="bg-red-500 w-full h-1 absolute bottom-0"></div>
  </div>
)

function SectionContagion() {
  return (
    <div className="SectionContagion relative mt-20 lg:mt-0">
      <div className="flex flex-col items-center md:flex-row relative mt-12 mb-16" >
        <div className="w-full flex flex-col items-center text-center px-4 lg:px-24 z-10">
          <h3 className="text-xl font-semibold secondary-text-color capitalize">Covid-19</h3>
          <h1 className="text-4xl font-semibold primary-text-color capitalize">Contagion</h1>
          <div className="w-full lg:w-2/5">
            <p className="text-sm leading-loose text-gray-700 mt-4 capitalize">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</p>
          </div>
        </div>
      </div>
      <div className="cards flex flex-col lg:flex-row justify-center items-center lg:items-stretch" style={{minHeight:'22rem'}}>
        {cards.map((val,idx) => cardComponent(val))}
      </div>

      <img className="absolute bottom-0 left-0 z-0 w-40 mb-4 ml-24 z-0" alt="about-virus" src={contagionVirus} />
    </div>
  );
}

export default SectionContagion;
