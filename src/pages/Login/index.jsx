import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import backImg from '../../assets/images/login-bac-img.png'; // Ensure this path is correct

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/accounts/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('accessToken', data.access);

        setPopupMessage('You have been successfully logged in.');
        setSuccessPopup(true);

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setPopupMessage('Invalid login credentials.');
        setErrorPopup(true);
      }
    } catch (error) {
      setPopupMessage('An error occurred during login. Please try again.');
      setErrorPopup(true);
    }
  };

  const handleClosePopup = () => {
    setSuccessPopup(false);
    setErrorPopup(false);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img src={backImg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 md:p-12 max-w-sm w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Login</h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-500 text-lg" />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-3">
              <FaLock className="text-gray-500 text-lg" />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-center mt-8">
              <Button
                variant="contained"
                size="large"
                fullWidth
                type="submit"
                sx={{
                  textTransform: 'none',
                  padding: '12px 16px',
                  fontWeight: 'bold',
                  backgroundColor: '#ffc107',
                  color: '#000',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#ffb300',
                  },
                }}
              >
                Login
              </Button>
            </div>
          </form>

          <div className="mt-6 space-y-2">
            <a href="#forgot-password" className="text-yellow-400 hover:text-yellow-500 transition duration-300">
              Forgot Password?
            </a>
            <p className="text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-yellow-400 hover:text-yellow-500 transition duration-300">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

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
  );
}

export default Login;
