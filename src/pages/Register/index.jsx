import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import backImg from '../../assets/images/login-bac-img.png';

function Register() {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // State for error or success messages
  const [message, setMessage] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // Make the POST request to the registration endpoint
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration successful! Please check your email.');
      } else {
        // Handle errors (display error message)
        setMessage(data.detail || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
      </div>

      {/* Form Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 max-w-sm w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Register
          </h1>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            {/* Last Name */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-2">
              <FaLock className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center space-x-2">
              <FaLock className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <Button
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                sx={{
                  textTransform: 'none',
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  backgroundColor: '#ffc107',
                  color: '#000',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#ffb300'
                  }
                }}
              >
                Register
              </Button>
            </div>
          </form>

          {/* Display message */}
          {message && (
            <p className="mt-4 text-sm text-red-500">{message}</p>
          )}

          {/* Additional Links */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-yellow-400 hover:text-yellow-500 transition duration-300">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
