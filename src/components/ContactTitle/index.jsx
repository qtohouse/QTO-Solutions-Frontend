import React from 'react';
import contactus from '../../assets/images/images/contact-us.png';

function ContactTitle() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactus}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay with low opacity */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 font-medium mb-4">
          "We're Just a Click Away - Reach Out Now"
        </p>
      </div>
    </div>
  );
}

export default ContactTitle;
