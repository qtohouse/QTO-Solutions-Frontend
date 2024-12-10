import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/images/images/qto logo_new1.png';

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-100 py-8 md:py-12">
      <div className="max-w-[90%] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-32 md:w-40 mb-4" />
          <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
            QTO Solutions is a Professional Estimation and Quantity Take-off Service Provider. We assist our clients in the pain-staking and time-consuming involvement of Building Estimation. With QTO Solutions, the bidding process is made simple.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400 text-lg" />
              <a href="mailto:info@qtosol.com" className="text-sm md:text-base hover:text-yellow-400">info@qtosol.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-400 text-lg" />
              <a href="tel:+13125440023" className="text-sm md:text-base hover:text-yellow-400">(312)-544-0023</a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 space-y-">
            <a href="#home" className="block hover:text-yellow-400 transition duration-300">Home</a>
            <a href="#about" className="block hover:text-yellow-400 transition duration-300">About</a>
            <a href="#contact" className="block hover:text-yellow-400 transition duration-300">Contact</a>
            <a href="#faqs" className="block hover:text-yellow-400 transition duration-300">FAQs</a>
            <a href="#career" className="block hover:text-yellow-400 transition duration-300">Career</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm md:text-base">© 2024 QTO SOLUTIONS - ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Footer;
