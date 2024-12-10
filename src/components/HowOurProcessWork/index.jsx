import React from "react";
import { FaClipboardCheck, FaCogs, FaProjectDiagram, FaFileInvoice } from 'react-icons/fa'; // Example icons

function HowOurProcessWork() {
  const steps = [
    {
      icon: <FaClipboardCheck className="text-yellow-500 text-3xl mb-2" />,
      title: "Strategic Analysis of Project Plans",
      description:
        "Our certified take-off specialists meticulously examine all pertinent project plans and drawings, including civil, architectural, structural, and MEP plans, as well as specifications. We thoroughly review the take-off scope and bid form to ensure accuracy."
    },
    {
      icon: <FaCogs className="text-yellow-500 text-3xl mb-2" />,
      title: "Streamlined Quantity Take-Off",
      description:
        "Using advanced take-off software like Planswift or Bluebeam, our specialists load the PDF plans and scale them appropriately. They then proceed to measure, count, and quantify various construction materials required for the project, including concrete, masonry, structural steel, and more."
    },
    {
      icon: <FaProjectDiagram className="text-yellow-500 text-3xl mb-2" />,
      title: "Project Cost Overview",
      description:
        "Our specialists prepare a comprehensive project cost overview based on the accurate material estimates, providing detailed insights and supporting strategic decision-making for bidding and project planning."
    },
    {
      icon: <FaFileInvoice className="text-yellow-500 text-3xl mb-2" />,
      title: "Construction Take-Off Deliverables",
      description:
        "The final deliverables include a detailed material estimate in Excel format, color-coded markups in PDF showing the quantities on the plans, and any relevant notes or RFIs related to the project. These files are fully editable for easy modifications or sharing."
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">How Our Process Works</h1>
          <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-600 max-w-full mx-auto">
            Our certified take-off specialists use a structured process to accurately calculate the quantities of various construction materials required for each project. Here's a brief overview of how our construction take-off services work:
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                {step.icon}
                <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 ml-3">{step.title}</h3>
              </div>
              <p className="text-xs md:text-sm lg:text-lg text-justify text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowOurProcessWork;
