import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.grey[100],
  boxShadow: theme.shadows[3],
}));

const servicesData = [
  {
    title: 'Consultation',
    description: 'Expert advice and diagnosis for your hair concerns.',
  },
  {
    title: 'Scalp Treatment',
    description: 'Specialized treatments to restore scalp health.',
  },
  {
    title: 'Hair Restoration',
    description: 'Innovative solutions for hair regrowth and maintenance.',
  },
];

const Services = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ServiceCard>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1">
                {service.description}
              </Typography>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
