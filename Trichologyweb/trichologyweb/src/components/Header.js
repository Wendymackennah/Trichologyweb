
// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Dr. Ava Morgan
        </Typography>
        <Box>
          <Button color="inherit" sx={{ mx: 1 }}>About Us</Button>
          <Button color="inherit" sx={{ mx: 1 }}>Services</Button>
          <Button color="inherit" sx={{ mx: 1 }}>Blog</Button>
          <Button color="inherit" sx={{ mx: 1 }}>Before/After</Button>
          <Button color="inherit" sx={{ mx: 1 }}>Contact Us</Button>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ ml: 2, borderRadius: 8 }}
          >
            Book Consultation
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
