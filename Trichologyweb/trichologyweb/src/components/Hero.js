import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

// Customize the hero section with a background image and overlay
const HeroSection = styled(Box)(({ theme }) => ({
  height: '80vh',
  backgroundImage: 'url(https://via.placeholder.com/1600x900)', // Replace with your asset
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
}));

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const Content = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
}));

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Clinic
        </Typography>
        <Typography variant="h5" paragraph>
          Specialized care for your hair and scalp
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
      </Content>
    </HeroSection>
  );
};

export default Hero;
