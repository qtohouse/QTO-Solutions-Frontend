import React from 'react';
import comercial from '../../assets/images/comercial.png';

function OurSolutions() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">Our Solutions</h1>
          <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600 max-w-full mx-auto">
            QTO Solutions provides a range of accurate and affordable quantity takeoff services and construction estimating support services to organizations across the construction industry. We specialize in all construction trades and CSI divisions related to:
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={comercial}
              alt="Comercial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-12 md:w-1/2">
            <p className="text-gray-700 text-xs md:text-sm lg:text-2xl text-justify">
              We offer tailored solutions designed to meet the needs of general contractors, subcontractors, architects, and developers. Our detailed approach ensures precision, cost-effectiveness, and a focus on maximizing your project's profitability. By utilizing cutting-edge technology and experienced estimators, we streamline processes and provide the critical insights needed for success.
            </p>
            <p className="mt-4 text-gray-700 text-xs md:text-sm lg:text-2xl text-justify">
              Trust QTO Solutions to deliver timely, reliable, and accurate estimations that empower you to make informed decisions every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSolutions;
