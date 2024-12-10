import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import BusinessPerfomance from "../../assets/images/businessperformance.png";

function Sample() {
  const [sampleType, setSampleType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [successPopup, setSuccessPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const navigate = useNavigate();
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("accessToken"); // Retrieve token from local storage

    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }

    const requestData = {
      sample_type: sampleType,
      name,
      email,
      company_name: companyName,
    };

    try {
      const response = await fetch(`${apiBaseUrl}/api/sample-requests/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (response.status === 401) {
        // Redirect to login if unauthorized
        navigate("/login");
      } else if (response.ok) {
        const data = await response.json();
        // Display success popup
        setPopupMessage(
          `Sample request for ${data.name} was successfully created.`
        );
        setSuccessPopup(true);
      } else {
        // Handle error response
        const errorData = await response.json();
        setPopupMessage(
          `Error: ${
            errorData.detail ||
            "An error occurred while creating the sample request."
          }`
        );
        setErrorPopup(true);
      }
    } catch (error) {
      setPopupMessage("An unexpected error occurred. Please try again later.");
      setErrorPopup(true);
    }
  };

  const handleClosePopup = () => {
    setSuccessPopup(false);
    setErrorPopup(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${BusinessPerfomance})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "12px",
            boxShadow: 3,
            p: 4,
            maxWidth: "500px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Download Our Samples
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
            Do you want to see how good our work is? Get our sample for free
            right now.
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleFormSubmit}
          >
            <FormControl fullWidth variant="outlined">
              <InputLabel id="select-field-label">Select a Field</InputLabel>
              <Select
                labelId="select-field-label"
                id="select-field"
                label="Select a Field"
                value={sampleType}
                onChange={(e) => setSampleType(e.target.value)}
              >
                <MenuItem value="New Construction">New Construction</MenuItem>
                <MenuItem value="Renovation/Remodeling/Retrofitting">
                  Renovation/Remodeling/Retrofitting
                </MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                sx: { borderRadius: "8px" },
              }}
            />

            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                sx: { borderRadius: "8px" },
              }}
            />

            <TextField
              label="Your Company"
              variant="outlined"
              fullWidth
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              InputProps={{
                sx: { borderRadius: "8px" },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                mt: 4,
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#ffc107",
                "&:hover": { backgroundColor: "#ffb300" },
              }}
            >
              Request Samples
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={successPopup}
        autoHideDuration={6000}
        onClose={handleClosePopup}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClosePopup} severity="success" sx={{ width: "100%" }}>
          {popupMessage}
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={errorPopup}
        autoHideDuration={6000}
        onClose={handleClosePopup}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClosePopup} severity="error" sx={{ width: "100%" }}>
          {popupMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Sample;
