import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Divider,
} from '@mui/material';

function UserProjectCreate() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create Project
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Complete the form below to add a new project.
        </Typography>

        {/* Project Information Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Project Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Project Title" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select label="Status">
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="closed">Closed</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Authority" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Sub Authority" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="CSI Division" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Location" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Country" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="City" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Zip Code" variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        {/* Bid Information Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Bid Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bid Amount" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Bidding Method</InputLabel>
                <Select label="Bidding Method">
                  <MenuItem value="open">Open</MenuItem>
                  <MenuItem value="closed">Closed</MenuItem>
                  <MenuItem value="negotiated">Negotiated</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bid Phase" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Project Completion Time" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Solicitation Title" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Solicitation Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Liquidated Damages" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Pre-bid Meeting Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Pre-bid Meeting Notes" multiline rows={4} variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bid Bond" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Performance Bond" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Payment Bond Percentage" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bid Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Bid Location" variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        {/* MWSEBs and SDVOBs Information */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            MWSEBs and SDVOBs Information
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="MWSEBs" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>SDVOBs</InputLabel>
                <Select label="SDVOBs">
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="MBE" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="EEO" variant="outlined" />
            </Grid>
          </Grid>
        </Box>

        {/* Upload Documents Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Upload Documents
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Button variant="contained" component="label" fullWidth>
                Upload Project Plans
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" component="label" fullWidth>
                Upload Project Specs
                <input type="file" hidden />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label" fullWidth>
                Upload Project Take-Offs
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" color="error">
            Delete
          </Button>
          <Button variant="contained" color="primary">
            Create Project
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default UserProjectCreate;
