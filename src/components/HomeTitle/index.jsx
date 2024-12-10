import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import bgImg from '../../assets/images/images/ci1.jpg';

function HomeTitle() {
  const navigate = useNavigate(); // Create a navigate function instance

  const handleButtonClick = () => {
    navigate('/sample'); // Navigate to the sample page
  };

  
  return (
    <div className="relative w-full h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bgImg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Low opacity overlay */}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
          QTO Solutions
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl text-gray-200 max-w-3xl mb-8 drop-shadow-lg">
          "Empowering your project with detailed and accurate takeoff, simplifying estimation, and amplifying bidding success"
        </p>
        <button
          onClick={handleButtonClick} // Add onClick event
          className="px-2 md:px-4 lg:px-6 py-2 md:py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out"
        >
          Get Free Sample
        </button>
      </div>
    </div>
  );
}

export default HomeTitle;
