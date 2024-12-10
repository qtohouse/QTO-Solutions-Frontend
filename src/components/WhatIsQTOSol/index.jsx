import React from "react";
import { FaDollarSign, FaClock, FaHeadset, FaCheckCircle } from 'react-icons/fa'; // Example icons

function WhatIsQTOSol() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">What Is QTO Solutions?</h1>
          <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600 max-w-full mx-auto">
            Empowering Your Construction Success Through Accuracy. QTO Solutions is your trusted partner in navigating the complexities of construction estimation and bidding. We are a premier provider of pre-construction consultancy services, dedicated to delivering detailed and accurate takeoffs, simplifying the estimation process, and amplifying your bidding success. Our team collaborates closely with clients, offering personalized support and tailored solutions to meet your unique project requirements. From initial concept to final bid submission, we streamline the estimation journey, empowering you to make informed decisions and maximize profitability. Trust QTO Solutions to be your strategic ally in achieving construction excellence, every step of the way.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaDollarSign className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Save Money</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-700">
              You can save money by getting help with estimating your construction costs from us instead of hiring a full-time estimator. Our services are offered at a nominal fee for both full and trade-specific estimates, allowing you to save money.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaClock className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Fast Turnaround</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-700">
              Our team of certified estimators specializes in preparing construction estimates. Working collaboratively allows us to deliver estimates in a timely manner, ensuring that you meet your deadline.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaHeadset className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Quick Support</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-700">
              Our team of professional cost estimators is available 24/7 to address any inquiries you may have via phone or email. We offer ongoing support and revisions, even after delivering the estimates to ensure your satisfaction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-yellow-500 text-3xl mr-3" />
              <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800">Accuracy Insured</h3>
            </div>
            <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-700">
              Our estimates comply with local construction specifications, material, and labor rates. By utilizing state-of-the-art software such as PlanSwift and Bluebeam, we guarantee our clients receive the most precise cost estimates for their project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsQTOSol;
