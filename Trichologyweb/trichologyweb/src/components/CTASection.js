// src/components/CTASection.js
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

const CTASection = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center', backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ mb: 2 }}>
          Your Hair Story Isn't Over—It's Just Beginning
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Don’t let another day go by wondering “what if.” Join the thousands of women who have found their way to beautiful, healthy hair at Hair Wellness Studio.
        </Typography>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2} 
          justifyContent="center"
        >
          <Button variant="contained" color="primary" sx={{ borderRadius: 8 }}>
            Start Your Hair Revival Journey
          </Button>
          <Button variant="outlined" color="primary" sx={{ borderRadius: 8 }}>
            Download Our Guide to Hair Healing
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTASection;
