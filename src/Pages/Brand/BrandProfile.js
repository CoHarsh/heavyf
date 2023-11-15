import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Paper,
} from '@mui/material';
import BrandMessages from './BrandMessages';
import SearchArea from './SearchArea';
import BrandCollabration from './BrandCollabration';
const BrandProfile = () => {
  const brandData = {
    companyName: 'TechCo',
    email: 'info@techco.com',
    description: "Towards the better technological world.",
    industry: ['Technology', 'Electronics'],
    targetAudience: ['Tech Enthusiasts', 'Gadget Lovers'],
    collaborations: [
      { id: 1, creator: 'John Doe', type: 'Sponsored Post', payment: '$500' },
      { id: 2, creator: 'Jane Smith', type: 'Product Placement', payment: 'Free Products' },
    ],
    profilePhoto: 'https://placekitten.com/150/150', // Add your actual profile photo URL
    messages: [
      { id: 1, sender: 'Influencer1', message: 'Interested in collaboration' },
      { id: 2, sender: 'Influencer2', message: 'lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
      // Add more messages as needed
    ],
  };

  const collabdata = [];
  

  return (
    <Box style={{ margin: '40px 40px 20px 40px' }}>
      <Grid  spacing={1} >
          <Grid container spacing={3} >
            <Grid item xs={3}>
                <Paper elevation={3} style={{ padding: '16px', marginTop: '20px', minHeight:'500px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar alt="Brand Logo" src={brandData.profilePhoto} sx={{ width: 150, height: 150 }} />
                    <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
                    {brandData.companyName}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                    {brandData.email}
                    </Typography>
                    <Typography variant='body1' color="textSecondary">
                    {brandData.description}
                    </Typography>
                </div>
             
                        <Divider style={{ margin: '10px 0' }} />
                <Box>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom>
                            Industry:
                        </Typography>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {brandData.industry.map((category) => (
                            <Chip key={category} label={category} color="secondary" style={{ margin: '4px' }} />
                            ))}
                        </div>
                        <Typography variant="subtitle1" gutterBottom style={{ marginTop: '20px' }}>
                            Target Audience:
                        </Typography>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {brandData.targetAudience.map((audience) => (
                            <Chip key={audience} label={audience} color="secondary" style={{ margin: '4px' }} />
                            ))}
                        </div>
                        <Divider style={{ margin: '20px 0' }} />
                        <Grid item xs={12} mb={3} align="center">
                            <Button variant="contained" color="primary">
                            Edit Profile
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                </Paper>
            </Grid>
            <Grid item xs={6}>
               
                <Typography variant='h5' sx={{ textAlign: 'center', marginTop: '10px' }} color="textSecondary">
                    Search Creator
                </Typography>
                <SearchArea/>
                <Divider style={{margin:"20px 0"}}/>
                <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '10px', marginBottom:'10px' }} color="textSecondary">
                    Past Collobrations
                </Typography>
                <BrandCollabration collabdata = {collabdata}/>
            </Grid>
            <Grid item xs={3}>
                <Paper elevation={3} style={{ padding: '16px', marginTop: '20px', minHeight:'500px' }}>
                    <Typography variant='h6' sx={{ textAlign: 'center', marginTop: '5px', marginBottom:'10px' }} color="textSecondary">
                        Messages
                    </Typography>
                    <Divider/>
                    <BrandMessages messages={brandData.messages} />
                </Paper>
            </Grid>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default BrandProfile;
