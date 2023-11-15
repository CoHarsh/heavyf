import React from "react";
import { Typography, Paper, List, ListItem, ListItemText, Divider } from "@mui/material";

const BrandCollaboration = ({ collabdata }) => {
  return (
    <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
      {collabdata.length > 0 ? (
        <>
          <Typography variant="h6" color="primary" gutterBottom>
            Brand Collaborations
          </Typography>
          <List>
            {collabdata.map((collab, index) => (
              <React.Fragment key={collab.id}>
                <ListItem>
                  <ListItemText
                    primary={collab.sender}
                    secondary={`Type: ${collab.type}, Payment: ${collab.payment}`}
                  />
                </ListItem>
                {index !== collabdata.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </>
      ) : (
        <Typography variant="body1" color="textSecondary">
          Your brand have not collaborated with anyone yet.
        </Typography>
      )}
    </Paper>
  );
};

export default BrandCollaboration;
