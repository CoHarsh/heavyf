import React from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Chip,
  Divider,
  Container,
  Box,
  Paper,
} from '@mui/material';


const BrandPublicProfile = () => {
  const creatorData = {
    creatorName: 'John Doe',
    email: 'john.doe@example.com',
    description: 'Passionate creator exploring new collaborations.',
    industry: ['Technology', 'Photography'],
    targetAudience: ['Tech Enthusiasts', 'Photo Enthusiasts'],
    collaborations: [
      { id: 1, brand: 'TechCo', type: 'Sponsored Post', payment: '$500' },
      { id: 2, brand: 'TravelNow', type: 'Product Placement', payment: 'Free Products' },
    ],
    profilePhoto: 'https://placekitten.com/150/150',
    messages: [
      { id: 1, sender: 'Brand1', message: 'Interested in collaboration' },
      { id: 2, sender: 'Brand2', message: 'Lorem Ipsum is simply dummy text.' },
      // Add more messages as needed
    ],
  };

  return (
    <Container style={{ margin: '40px 40px 20px 40px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '20px', minHeight: '500px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar alt="Creator Avatar" src={creatorData.profilePhoto} sx={{ width: 150, height: 150 }} />
              <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
                {creatorData.creatorName}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {creatorData.email}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {creatorData.description}
              </Typography>
            </div>

            <Divider style={{ margin: '10px 0' }} />
            <Box>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Industry:
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {creatorData.industry.map((category) => (
                    <Chip key={category} label={category} color="secondary" style={{ margin: '4px' }} />
                  ))}
                </div>
                <Typography variant="subtitle1" gutterBottom style={{ marginTop: '20px' }}>
                  Target Audience:
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {creatorData.targetAudience.map((audience) => (
                    <Chip key={audience} label={audience} color="secondary" style={{ margin: '4px' }} />
                  ))}
                </div>
                
              </Grid>
            </Box>
          </Paper>
        </Grid>
        
        
      </Grid>
    </Container>
  );
};

export default BrandPublicProfile;
