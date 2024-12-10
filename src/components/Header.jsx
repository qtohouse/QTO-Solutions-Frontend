import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaEnvelope, FaPhoneAlt, FaHome, FaInfoCircle, FaLightbulb, FaPhone, FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App'; // Import AuthContext
import logo from '../assets/images/qto logo_new.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // Use AuthContext
  const [username] = useState("John Doe"); // Static username for demonstration
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for user dropdown menu
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Clear tokens and update login state
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-toggle')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <header className="text-gray-100">
      {/* Top section for contact details */}
      <div className="flex items-center justify-end space-x-6 px-4 md:px-10 bg-gray-700 text-yellow-400 py-2">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lg" />
          <a href="mailto:info@qtosol.com">info@qtosol.com</a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-lg" />
          <a href="tel:+13125440023">(312)-544-0023</a>
        </div>
        {/* Conditional rendering for Login/Logout and User Info */}
        {isLoggedIn ? (
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer text-yellow-400 dropdown-toggle"
              onClick={toggleDropdown}
            >
              <FaUserCircle className="text-lg" />
              <span>{username}</span>
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 dropdown-menu">
                <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Dashboard</Link>
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsDropdownOpen(false)}>Profile</Link>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <FaSignInAlt className="text-lg" />
            <Link to="/login" className="text-yellow-400">Login</Link>
          </div>
        )}
      </div>

      {/* Navigation bar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 md:h-20 w-auto cursor-pointer" />
          </Link>
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row items-center text-gray-900 md:bg-transparent space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaHome />
            <Link to="/" className="text-lg">Home</Link>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaInfoCircle />
            <Link to="/about" className="text-lg">About Us</Link>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaLightbulb />
            <Link to="/solutions" className="text-lg">Solutions</Link>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 cursor-pointer transition duration-300">
            <FaPhone />
            <Link to="/contact" className="text-lg">Contact Us</Link>
          </div>
        </div>

        {/* Button wrapped in Link */}
        <div className={`${isMobileMenuOpen ? "block mt-4" : "hidden md:block"} md:mt-0`}>
          <Link to="/quote">
            <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out">
              Get Free Quote
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
