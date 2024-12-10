import React from 'react';
import { FaChartBar, FaTasks, FaTrophy, FaClipboardCheck } from 'react-icons/fa';

function Stats() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* QTO Available */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaClipboardCheck className="text-yellow-500 text-4xl mb-2" />
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">79</p>
            <p className="text-xs md:text-sm lg:text-lg text-gray-600">QTO Available</p>
          </div>

          {/* QTO In Progress */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaTasks className="text-yellow-500 text-4xl mb-2" />
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">22</p>
            <p className="text-xs md:text-sm lg:text-lg text-gray-600">QTO In Progress</p>
          </div>

          {/* Bid Results */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaChartBar className="text-yellow-500 text-4xl mb-2" />
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">125</p>
            <p className="text-xs md:text-sm lg:text-lg text-gray-600">Bid Results</p>
          </div>

          {/* Awarded */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaTrophy className="text-yellow-500 text-4xl mb-2" />
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">66</p>
            <p className="text-xs md:text-sm lg:text-lg text-gray-600">Awarded</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
