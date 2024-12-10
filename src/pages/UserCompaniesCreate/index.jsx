import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

function UserCompaniesCreate() {
  const [selectedDivisions, setSelectedDivisions] = useState([]);
  const [selectedContractorTypes, setSelectedContractorTypes] = useState([]);

  const handleDivisionChange = (event) => {
    setSelectedDivisions(event.target.value);
  };

  const handleContractorTypeChange = (event) => {
    setSelectedContractorTypes(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create Company
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Complete the form below to add a new company profile.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Company Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Company Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Location" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Country" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="State" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Zip Code" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Website URL" variant="outlined" />
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Contact Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Person Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email" type="email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Phone" variant="outlined" />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Contact Person Address
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Location" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Country" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="State" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="City" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Zip Code" variant="outlined" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Company Details Section */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Company Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Year Founded" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Company Size" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Financial Information" variant="outlined" multiline rows={3} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Notes and Comments" variant="outlined" multiline rows={4} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="csi-divisions-label">CSI Divisions</InputLabel>
              <Select
                labelId="csi-divisions-label"
                multiple
                value={selectedDivisions}
                onChange={handleDivisionChange}
                variant="outlined"
              >
                <MenuItem value="division1">Division 1</MenuItem>
                <MenuItem value="division2">Division 2</MenuItem>
                <MenuItem value="division3">Division 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="contractor-type-label">Contractor Type</InputLabel>
              <Select
                labelId="contractor-type-label"
                multiple
                value={selectedContractorTypes}
                onChange={handleContractorTypeChange}
                variant="outlined"
              >
                <MenuItem value="type1">Type 1</MenuItem>
                <MenuItem value="type2">Type 2</MenuItem>
                <MenuItem value="type3">Type 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Create Button */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          fullWidth
        >
          Create
        </Button>
      </Paper>
    </Container>
  );
}

export default UserCompaniesCreate;
