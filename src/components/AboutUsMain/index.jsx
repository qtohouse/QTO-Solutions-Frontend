import React from 'react';

function AboutUsMain() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-xs md:text-sm lg:text-lg text-gray-600 max-w-[100%] text-justify mx-auto">
            Welcome to QTO Solutions, where innovation meets expertise in the dynamic world of construction. As a premier provider of pre-construction consultancy services, we are your trusted partner in navigating the intricate landscape of project estimation and bidding.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-12">
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl text-justify mb-4">
            At QTO Solutions, we understand the pivotal role accurate cost estimation plays in the success of any construction endeavor. That's why we have assembled a team of versatile estimators equipped with cutting-edge software tools, enabling us to deliver precise and competitive estimates tailored to your unique project requirements.
          </p>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl text-justify mb-4">
            Our commitment to professionalism, accuracy, and customer satisfaction is unwavering. With coverage spanning across all US states, we are dedicated to supporting general contractors, subcontractors, developers, and private owners alike in achieving their construction goals.
          </p>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl text-justify mb-4">
            What sets us apart is our relentless pursuit of excellence. We pride ourselves on our ability to streamline operations for general contractors, empowering them to win bids with confidence. By harnessing the power of technology and industry-leading insights, we provide unparalleled efficiency and accuracy in our estimating and take-off services.
          </p>
          <p className="text-gray-700 text-sm md:text-lg lg:text-xl text-justify">
            Experience the QTO Solutions difference and unlock the full potential of your construction projects. Partner with us today and let's build a brighter future together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
