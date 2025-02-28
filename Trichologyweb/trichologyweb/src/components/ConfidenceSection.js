// src/components/ConfidenceSection.js
import React from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

const ConfidenceSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
          Turning Frustration Into Confidence: Your Hair Revival Story
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Left side: daily struggles */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Your Daily Struggles:
            </Typography>
            <List>
              <ListItem disableGutters>
                <ListItemText primary="Avoiding photos because of thinning hair" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Feeling self-conscious at work or social events" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Spending money on countless products that don’t work" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Missing the joy of styling your natural hair" />
              </ListItem>
            </List>
          </Grid>
          {/* Right side: our promise */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Promise:
            </Typography>
            <List>
              <ListItem disableGutters>
                <ListItemText primary="Identify the true cause of your hair loss" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Tailor a science-backed restoration plan just for you" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Be with you every step of the way" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Celebrate every success on your journey to renewal" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConfidenceSection;
