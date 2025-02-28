
// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, TextField, IconButton, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left branding */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
              Hair Wellness Studio
            </Typography>
          </Grid>
          {/* Subscribe */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Subscribe to get <br /> our special offers
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                variant="filled"
                size="small"
                placeholder="E-mail address"
                sx={{ 
                  bgcolor: 'white',
                  borderRadius: 1,
                  mr: 1,
                  flex: 1
                }}
              />
              <IconButton color="secondary" sx={{ bgcolor: 'white' }}>
                <SendIcon />
              </IconButton>
            </Box>
          </Grid>
          {/* Company */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Company
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Before/After" />
              </ListItem>
            </List>
          </Grid>
          {/* Terms & Policy */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Terms & Policy
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="Terms of Service" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Cookie Policy" />
              </ListItem>
            </List>
          </Grid>
          {/* Contact */}
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">info@atlantatrichology.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+1 (555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                123 Avenue, Suite 100, City, State, ZIP
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
