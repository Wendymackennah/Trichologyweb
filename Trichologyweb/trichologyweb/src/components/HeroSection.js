
// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  backgroundImage: `url('https://via.placeholder.com/1500x900')`, // Replace with your hero image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
}));

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.4)',
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <Overlay />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Hair Wellness Studio
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: '600px', mb: 4 }}>
          Reclaim Your Crown at Hair Wellness Studio
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
          Don’t Let Hair Loss Steal Your Confidence. Experience Life-Changing Results with Trusted Experts in Hair Health and Restoration.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 8 }}>
            Learn More
          </Button>
          <Button variant="outlined" color="secondary" sx={{ borderRadius: 8 }}>
            Our Services
          </Button>
        </Stack>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
