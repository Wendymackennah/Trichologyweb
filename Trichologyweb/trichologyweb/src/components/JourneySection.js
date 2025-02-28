// src/components/JourneySection.js
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const JourneySection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              You’re Not Alone in This Journey
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              The nights spent worrying over thinning hair, the frustration of products that promise change but never deliver, and the loss of joy when it comes to styling. It’s not just about hair loss—it’s about the confidence and identity that go with it. At Hair Wellness Studio, we’ve helped thousands regain their hair and their confidence. We’re here to walk with you every step of the way.
            </Typography>
            <Button variant="contained" color="primary" sx={{ borderRadius: 8 }}>
              View Transformation Stories
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Replace with actual image */}
            <Box 
              component="img" 
              src="https://via.placeholder.com/600x400" 
              alt="Group of women" 
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JourneySection;
