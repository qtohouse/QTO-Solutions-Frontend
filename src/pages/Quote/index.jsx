import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaFileUpload,
  FaClipboardList,
  FaCalendarAlt
} from 'react-icons/fa';
import backImg from '../../assets/images/login-bac-img.png';

function Quote() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    company_name: '',
    number_of_drawings: '',
    target_number_of_days: '',
    specification_files: null,
  });

  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, specification_files: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken'); // Assuming you have token logic

    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/quote-requests/`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (response.ok) {
        setSuccessPopup(true);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          address: '',
          company_name: '',
          number_of_drawings: '',
          target_number_of_days: '',
          specification_files: null,
        });
      } else {
        setErrorPopup(true);
      }
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setErrorPopup(true);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img
          src={backImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 max-w-3xl w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Get Free Quote
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                placeholder="Enter your first name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                placeholder="Enter your last name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>

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
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Address"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaBuilding className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Company Name"
                placeholder="Enter your company name"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaClipboardList className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Number of Drawings"
                placeholder="Enter the number of drawings"
                type="number"
                name="number_of_drawings"
                value={formData.number_of_drawings}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Target Number of Days"
                placeholder="Enter target number of days"
                type="number"
                name="target_number_of_days"
                value={formData.target_number_of_days}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2 text-gray-700">
                <FaFileUpload className="text-gray-500 text-2xl" />
                <span className="font-semibold">Upload File</span>
              </label>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  borderColor: '#ffc107',
                  color: '#ffc107',
                  '&:hover': {
                    borderColor: '#ffb300',
                    backgroundColor: '#fff8e1'
                  }
                }}
              >
                Choose File
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
            </div>

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
                Get Free Quote
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Snackbar */}
      <Snackbar
        open={successPopup}
        autoHideDuration={6000}
        onClose={() => setSuccessPopup(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessPopup(false)} severity="success" sx={{ width: '100%' }}>
          Quote request submitted successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={errorPopup}
        autoHideDuration={6000}
        onClose={() => setErrorPopup(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setErrorPopup(false)} severity="error" sx={{ width: '100%' }}>
          There was an error submitting your quote request. Please try again.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Quote;
