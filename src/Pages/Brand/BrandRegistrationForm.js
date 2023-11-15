import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  FormControl,
  FormLabel,
  Button,
  Container,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#FF4081',
    },
  },
});

const BrandRegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    industry: [],
    targetAudience: [],
    collaborationType: [],
    acceptedTerms: false,
  });

  const navigate = useNavigate();

  const handleAutocompleteChange = (field, newValue) => {
    setFormData({ ...formData, [field]: newValue });
  };

  const industryOptions = ["Technology", "Clothing", "Fashion", "Media"];
  const targetAudienceOptions = ["Tech Enthusiasts", "Fashion Lovers", "Health and Wellness", "Travel Enthusiasts"];
  const collaborationTypeOptions = ["Sponsored Content", "Product Placement", "Event Sponsorship"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/brand/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log("In catch API req module");
    }
    console.log("Redirecting....");
    navigate("/brand/profile");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: '40px' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
              Brand Registration
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name"
              fullWidth
              name="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              fullWidth
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Industry</FormLabel>
              <Autocomplete
                multiple
                id="select-industry-autocomplete"
                options={industryOptions}
                value={formData.industry}
                onChange={(_, newValue) => handleAutocompleteChange("industry", newValue)}
                fullWidth
                required
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" fullWidth />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Target Audience</FormLabel>
              <Autocomplete
                multiple
                id="target-audience-autocomplete"
                options={targetAudienceOptions}
                value={formData.targetAudience}
                onChange={(_, newValue) => handleAutocompleteChange("targetAudience", newValue)}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" fullWidth />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Collaboration Type</FormLabel>
              <Autocomplete
                multiple
                id="collaboration-type-autocomplete"
                options={collaborationTypeOptions}
                value={formData.collaborationType}
                onChange={(_, newValue) => handleAutocompleteChange("collaborationType", newValue)}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" fullWidth />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormControlLabel
                control={
                  <Checkbox
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                    color="primary"
                  />
                }
                label="I accept the terms and conditions"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default BrandRegistrationForm;
