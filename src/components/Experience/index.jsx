import React from 'react';
import { FaSmile, FaClock, FaProjectDiagram, FaUsers } from 'react-icons/fa'; // Example icons

function Experience() {
  const data = [
    {
      title: "Satisfied Clients",
      icon: <FaSmile className="text-yellow-500 text-4xl mb-2" />,
      value: "500+"
    },
    {
      title: "Years of Experience",
      icon: <FaClock className="text-yellow-500 text-4xl mb-2" />,
      value: "08"
    },
    {
      title: "Number of Projects",
      icon: <FaProjectDiagram className="text-yellow-500 text-4xl mb-2" />,
      value: "1000+"
    },
    {
      title: "Estimating Team",
      icon: <FaUsers className="text-yellow-500 text-4xl mb-2" />,
      value: "40+"
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {item.icon}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-xl md:text-2xl lg:text-4xl font-extrabold text-yellow-500">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
