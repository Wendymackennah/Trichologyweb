import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Trichology Clinic. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
