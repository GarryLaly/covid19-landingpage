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
      top: 1300,
      right: 22,
      height: 89
    },
    {
      color: 'red',
      top: 1400,
      right: -104,
      height: 220
    },
    {
      color: 'green',
      top: 400,
      left: -92,
      height: 195
    }
  ]

  return (
    <div class="wswd-section mb-16">
      <div className="container mx-auto">
        <div className="wswd-heading">
          <div className="wswd-topic">Covid-19</div>
          <div className="wswd-title">What Should We Do</div>
          <div className="wswd-description">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</div>
        </div>
        {data.map((value, index) => {
          const no = (index + 1).toString().padStart(2, '0');

          // flex-row-reverse di-manual karena tailwind di sini belum support odd:
          return (
            <div className={"wswd-content flex flex-wrap mb-10 lg:mb-0 lg:px-32" + (no % 2 ? " lg:flex-row-reverse" : "")}>
              <div className="wswd-content-image hidden sm:w-1/4 sm:block lg:w-1/2">
                <img alt="" className={(no % 2 ? "lg:ml-10" : "")} src={require('../assets/images/what-should-we-do-' + no + '.png')} />
              </div>
              <div className="wswd-content-text w-full px-5 sm:w-3/4 sm:px-0 lg:w-1/2">
                <div>
                  <div className="wswd-number rounded-full">{no}</div>
                </div>
                <div className="wswd-body">
                  <div className="wswd-title">{value.title}</div>
                  <div className="wswd-description">{value.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {virus.map((value) => {
        const style = (({top, right, bottom, left, width, height}) => ({top, right, bottom, left, width, height}))(value);

        return (
          <div className="wswd-virus hidden lg:block" style={style}>
            <img alt="" src={require('../assets/images/what-should-we-do-virus-' + value.color + '.png')} />
          </div>
        );
      })}
    </div>
  );
}

export default SectionWhatShouldWeDo;
