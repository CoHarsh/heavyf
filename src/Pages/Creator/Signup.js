import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  TextareaAutosize,
  FormControl,
  FormLabel,
  Button,
  Container,
  Grid,
  Typography,
  Chip,
  Autocomplete,
  createTheme,
  ThemeProvider,
  Checkbox,
  FormControlLabel
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

const contentCategoriesOptions = [
  'Technology', 'Lifestyle', 'Fashion', 'Health', 'Travel', 'Food', 'Fitness',
  'Music', 'Beauty', 'Gaming', 'Business', 'Education', 'Science', 'Art', 'Photography',
  'Sports', 'Home', 'Pets', 'Movies', 'Books', 'Cars', 'Finance',
];

const CreatorRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    username: '',
    bio: '',
    profilePicture: '',
    socialMediaLinks: [],
    contentCategories: [],
    portfolio: '',
    collaborationType: [],
    preferredBrands: [],
    acceptedTerms: false,
    paymentPreferences: [],
    engagementRates: '',
    audienceDemographics: {
      targetAudience: '',
      audienceSize: '',
    },
  });

  const handleAutocompleteChange = (_, newValue) => {
    setFormData({ ...formData, contentCategories: newValue });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/signup', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log("In catch API req module")
    }
    console.log("Redirecting....")
    navigate("/creator/profile");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: '40px' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
              Creator Registration
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              fullWidth
              name="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
            <TextareaAutosize
              minRows={4}
              placeholder="Bio"
              style={{ width: '100%', marginBottom: '16px' }}
              name="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Content Categories</FormLabel>
              <Autocomplete
                multiple
                id="content-categories-autocomplete"
                options={contentCategoriesOptions}
                value={formData.contentCategories}
                onChange={handleAutocompleteChange}
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
            <Button type="submit" variant="contained" color="primary"  onClick={handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default CreatorRegistrationForm;
