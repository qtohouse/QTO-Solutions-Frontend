import React from "react";
import { FaCheckCircle, FaBullseye, FaHandshake, FaEye, FaBolt, FaDollarSign, FaShieldAlt, FaLightbulb } from 'react-icons/fa'; // Example icons

function CoreValue() {
  const values = [
    {
      icon: <FaCheckCircle className="text-yellow-500 text-3xl mb-2" />,
      title: "We're Precise",
      description:
        "We reflect our unwavering dedication to delivering accurate and detailed preconstruction estimates. This meticulous approach ensures the foundation of every project is built on reliability and precision."
    },
    {
      icon: <FaBullseye className="text-yellow-500 text-3xl mb-2" />,
      title: "We Are Disciplined",
      description:
        "We highlight our commitment to rigorous and systematic preconstruction estimating. This ensures accuracy and reliability are at the forefront of every project's foundation."
    },
    {
      icon: <FaHandshake className="text-yellow-500 text-3xl mb-2" />,
      title: "We are Accountable",
      description:
        "We signify our promise to uphold the highest standards of integrity and transparency in preconstruction estimating, ensuring every projection is both accurate and trustworthy."
    },
    {
      icon: <FaEye className="text-yellow-500 text-3xl mb-2" />,
      title: "We Are Transparent",
      description:
        "We reflect our commitment to open and honest communication in preconstruction estimating, ensuring clients have clear insights and understandings of every cost and decision."
    },
    {
      icon: <FaBolt className="text-yellow-500 text-3xl mb-2" />,
      title: "We Are Responsive",
      description:
        "We provide swift, accurate estimates and adapt to changes seamlessly. Our proactive approach resolves issues promptly, keeping projects on track. With clear communication, we empower confident decisions."
    },
    {
      icon: <FaDollarSign className="text-yellow-500 text-3xl mb-2" />,
      title: "We Are Affordable",
      description:
        "We prioritize affordability without compromising quality. Our experts meticulously analyze your project for cost-saving opportunities. Trust us as your cost-effective partner for excellence."
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-3xl mb-2" />,
      title: "We Are Reliable",
      description:
        "Reliability is our promise. With a track record of delivering on time, we're your dependable partner. Our team ensures consistent performance and transparent communication."
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-3xl mb-2" />,
      title: "We are Innovative",
      description:
        "At our core, we champion innovative approaches, creative problem-solving, and non-traditional methods that distinguish us from the competition."
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">Our Core Values</h1>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h2 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 mt-2">{value.title}</h2>
                <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600 mt-2">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreValue;
