import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Drawer, Typography, Box, Divider, Button, Paper, TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import CheckIcon from '@mui/icons-material/Check';

const BrandMessages = ({ messages }) => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleListItemClick = (message) => {
    setSelectedMessage(message);
  };

  const handleCloseChat = () => {
    setSelectedMessage(null);
  };

  const handleSend = () => {
    // Implement your logic to send a new message
    console.log('Sending message:', newMessage);
    // You may want to update the messages state or perform an API call here
    setNewMessage('');
  };

  return (
    <div>
      <Box>
        {selectedMessage ? 
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}>
              <IconButton onClick={handleCloseChat}>
                <ArrowBackIcon />
              </IconButton>
              <Avatar alt={selectedMessage.sender} src={selectedMessage.avatar} sx={{ marginLeft: '10px' }} />
              <Typography variant="h6" sx={{ marginLeft: '10px' }}>
                {selectedMessage.sender}
              </Typography>
            </Box>
            <Box>
              <Paper elevation={3} sx={{ maxHeight: '60vh', overflowY: 'auto', padding: '16px' }}>
                <Typography variant="body1" color="textSecondary">
                  {selectedMessage.message}
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ padding: '15px 0px 15px 0px', borderTop: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
              <Button
                variant="contained"
                color="success"
              >
                Accept
              </Button>
              
            </Box>
          </> : 
          <List>
            {messages.map((message) => (
              <React.Fragment key={message.id}>
                <ListItem key={message.id} button onClick={() => handleListItemClick(message)}>
                  <ListItemAvatar>
                    <Avatar alt={message.sender} src={message.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={message.sender}
                    secondary={(
                      <Typography variant="body1" sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1, // Set the number of lines to display
                        WebkitBoxOrient: 'vertical',
                        fontSize:'14px'
                      }} color="textSecondary">
                        {message.message}
                      </Typography>
                    )}
                  />

                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        }
      </Box>
    </div>
  );
};

export default BrandMessages;
