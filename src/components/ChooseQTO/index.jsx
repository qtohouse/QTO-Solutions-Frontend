import React from "react";
import { FaUserTie, FaClipboardList, FaTools, FaDollarSign } from 'react-icons/fa'; // Example icons

function ChooseQTO() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">Why Choose QTO Solutions</h1>
          <p className="text-xs md:text-sm lg:text-lg text-gray-600 max-w-full text-justify mx-auto">
            We are a professional construction estimating firm with a team of certified construction estimators, each having over 20 years of combined experience in construction takeoff services. Working with QTO Solutions means that your project is in the safe hands of experienced estimators who will accurately take off the materials for your project. Our estimators have on-site experience, extensive construction knowledge, and they adhere to the best estimation practices outlined by renowned associations such as ASPE, PMI, and CSI.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaUserTie className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Experienced Professionals</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lgtext-gray-700">
              Our estimators have 20+ years of experience in the construction industry and are trained to provide accurate and efficient take-off services for any project.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaClipboardList className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Comprehensive and Detailed Solution</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700">
              We understand that each project is unique and work closely with our clients to deliver a customized QTO solution that meets their needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaTools className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">State-of-the-art Technology</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700">
              We use the latest software and technology for measurements and material quantification, allowing for results with greater speed and accuracy than manual methods.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaDollarSign className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Cost-effective Pricing</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-gray-700">
              Our cost-effective pricing ensures you receive top-notch services at competitive rates, making your project estimation process more efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseQTO;
