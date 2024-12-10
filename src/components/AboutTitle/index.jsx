import React from 'react';
import aboutImg from '../../assets/images/about.png';

function AboutTitle() {
  return (
    <div className="relative w-full h-[40vh] md:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={aboutImg} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay with low opacity */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-yellow-400 drop-shadow-lg mb-2">
          Welcome to QTO Solutions
        </h1>
        <p className="text-sm md:text-lg lg:text-xl  text-gray-100 font-medium mb-4">
          "Accuracy Beyond Expectations"
        </p>
        <p className="text-xs md:text-sm lg:text-lg text-gray-200 max-w-2xl px-4">
          Delivering detailed and precise solutions that redefine industry standards.
        </p>
      </div>
    </div>
  );
}

export default AboutTitle;
