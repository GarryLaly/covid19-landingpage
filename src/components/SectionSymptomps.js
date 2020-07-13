import React from "react";
import symptompsvirus from "../assets/images/symptompsvirus.png";

function SectionSymptomps() {
  return (
    // <div>SectionSymptomps</div>

    <div className="SectionSymptomps relative mt-20 lg:mt-0">
      <div className="items-center md:flex-row relative mt-12 mb-16">
        <div className="w-full flex flex-col items-center text-center px-4 lg:px-24 z-10">
          <h3 className="text-xl font-semibold secondary-text-color capitalize">
            Covid-19
          </h3>
          <h1 className="text-4xl font-semibold primary-text-color capitalize">
            Symptomps
          </h1>
          <div className="w-full lg:w-3/5">
            <p className="text-sm leading-loose text-gray-700 mt-4 capitalize">
              Corona Viruses Are A Type Of Virus. There Are Many Different
              Kinds, And Some Cause Disease.
              <br /> A Newly Identified Type Has Caused A Recent Outbreak Of
              Respiratory
            </p>
          </div>
        </div>

        <div className="w-full items-center text-center mt-4 lg:px-10 z-10">
          <img className="w-full" alt="symptomps" src={symptompsvirus} />
        </div>
      </div>
    </div>
  );
}

export default SectionSymptomps;
