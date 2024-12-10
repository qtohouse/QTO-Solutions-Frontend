import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCity, FaBuilding, FaCommentDots } from 'react-icons/fa'; // Import icons
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ContactUsMain() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    city: '',
    company_name: '',
    message: '',
  });
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken'); // Assuming you have token logic

    if (!token) {
      navigate('/login'); // Redirect to login if no token
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact-us/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 401) {
        // Redirect to login if unauthorized
        navigate('/login');
      } else if (response.ok) {
        const data = await response.json();
        setPopupMessage(`Contact request for ${data.name} was successfully submitted.`);
        setSuccessPopup(true);
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          city: '',
          company_name: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setPopupMessage(
          `Error: ${errorData.detail || 'An error occurred while submitting the contact request.'}`
        );
        setErrorPopup(true);
      }
    } catch (error) {
      setPopupMessage('An unexpected error occurred. Please try again later.');
      setErrorPopup(true);
    }
  };

  const handleClosePopup = () => {
    setSuccessPopup(false);
    setErrorPopup(false);
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8 bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you! Please fill out the form below and our team will get back to you promptly.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-300 py-2">
            <FaUser className="text-gray-500 mr-3 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-center border-b border-gray-300 py-2">
            <FaEnvelope className="text-gray-500 mr-3 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-center border-b border-gray-300 py-2">
            <FaPhone className="text-gray-500 mr-3 text-xl" />
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              placeholder="Your Phone"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
              required
            />
          </div>

          <div className="flex items-center border-b border-gray-300 py-2">
            <FaCity className="text-gray-500 mr-3 text-xl" />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Your City"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 py-2">
            <FaBuilding className="text-gray-500 mr-3 text-xl" />
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400"
            />
          </div>

          <div className="flex items-start border-b border-gray-300 py-2">
            <FaCommentDots className="text-gray-500 mr-3 text-xl mt-1" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400 resize-none h-32"
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Success Snackbar */}
        <Snackbar
          open={successPopup}
          autoHideDuration={6000}
          onClose={handleClosePopup}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClosePopup} severity="success" sx={{ width: '100%' }}>
            {popupMessage}
          </Alert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar
          open={errorPopup}
          autoHideDuration={6000}
          onClose={handleClosePopup}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClosePopup} severity="error" sx={{ width: '100%' }}>
            {popupMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default ContactUsMain;
