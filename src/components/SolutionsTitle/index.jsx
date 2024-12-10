import React from 'react';
import solutionsImg from '../../assets/images/images/enhanced-image 5.png';

function SolutionsTitle() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={solutionsImg}
          alt="Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay with low opacity */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          Welcome to QTO Solutions
        </h1>
        <p className="text-xs md:text-sm lg:text-lg text-gray-100 font-medium mb-4 max-w-3xl">
          "Trust QTO Solutions to fine-tune your estimates, providing the edge you need to win lucrative contracts confidently."
        </p>
      </div>
    </div>
  );
}

export default SolutionsTitle;
