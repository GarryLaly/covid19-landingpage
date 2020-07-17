import React from 'react';

function SectionWhatShouldWeDo() {
  const data = [
    {
      title: 'wear masks',
      description: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively'
    },
    {
      title: 'Wash Your Hands',
      description: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals'
    },
    {
      title: 'Use nose - rag',
      description: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively'
    },
    {
      title: 'Avoid contacts',
      description: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic'
    }
  ];

  const virus = [
    {
      color: 'green',
      top: 2113,
      right: 160,
      height: 131
    },
    {
      color: 'red',
      top: 2453,
      right: 162,
      height: 324
    },
    {
      color: 'green',
      top: 907,
      left: -136,
      height: 287
    }
  ]

  return (
    <div className="container">
      <div className="heading">
        <div className="topic">Covid-19</div>
        <div className="title">What Should We Do</div>
        <div className="description">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</div>
      </div>
      {data.map((value, index) => {
        const no = (index + 1).toString().padStart(2, '0');

        return (
          <div className="content">
            <div className="content-text">
              <div className="number">{no}</div>
              <div className="body">
                <div className="title">{value.title}</div>
                <div className="description">{value.description}</div>
              </div>
            </div>
            <div className="content-image">
              <div className="image"><img alt="" src={require('../assets/images/what-should-we-do-' + no + '.png')} /></div>
            </div>
          </div>
        );
      })}
      {virus.map((value) => {
        const style = (({top, right, bottom, left, width, height}) => ({top, right, bottom, left, width, height}))(value);

        return (
          <div className="virus" style={style}>
            <img alt="" src={require('../assets/images/what-should-we-do-virus-' + value.color + '.png')} />
          </div>
        );
      })}
    </div>
  );
}

export default SectionWhatShouldWeDo;
