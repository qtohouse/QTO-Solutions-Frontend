import React from "react";
import { FaEye, FaBullseye } from 'react-icons/fa'; // Example icons for Vision and Mission

function VisionMission() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Vision and Mission Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col items-center text-center">
              <FaEye className="text-yellow-500 text-4xl mb-4" />
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">Our Vision</h2>
              <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600">
                Our vision at QTO Solutions is to redefine the landscape of construction estimation services. We aim to continually innovate and expand our offerings, integrating advanced technologies like BIM, VBM, & Submittal to provide comprehensive and dynamic solutions. By pioneering new standards in accuracy and efficiency, we envision becoming the go-to partner for construction companies seeking unparalleled precision in their project estimations.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col items-center text-center">
              <FaBullseye className="text-yellow-500 text-4xl mb-4" />
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
              <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600">
                Our mission is to empower construction companies in Northern America with precise material quantity take-offs and cost estimations. Through our commitment to accuracy and detail, we provide tailored and comprehensive solutions to our clients. Additionally, we're excited to announce that we'll now be offering project leads to our clients, further enhancing our suite of services to support their project management needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
