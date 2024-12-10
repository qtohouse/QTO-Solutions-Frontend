import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing a check icon

function Work() {
  const items = [
    "General Contractors",
    "Remodeling Contractors",
    "Sub-contractors",
    "Material Suppliers",
    "Architects",
    "Designers",
    "Homeowners",
    "Developers",
  ];

  return (
    <div className="py-12 bg-amber-500 text-gray-900">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-4">We Work With</h1>
          <p className="text-xs md:text-sm lg:text-lg max-w-3xl mx-auto">
            We are a multi-faceted industry leader and through our family of
            companies making up one of the region’s largest Construction
            Estimation Firms.
          </p>
        </div>

        {/* List Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <p className="text-xs md:text-sm lg:text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="text-center mt-8">
          <button className="px-2 md:px-4 lg:px-6 py-2 md:py-3 text-[10px] md:text-sm bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
