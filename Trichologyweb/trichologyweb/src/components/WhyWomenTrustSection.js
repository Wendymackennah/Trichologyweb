// src/components/WhyWomenTrustSection.js
import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';

const steps = [
  {
    title: 'Listen to Your Story',
    description:
      'We provide an understanding and private environment to explore your hair concerns in detail.',
  },
  {
    title: 'Uncover the Truth',
    description:
      'With advanced diagnostics, hormone testing, and root cause analysis, we identify the underlying issues behind your hair loss.',
  },
  {
    title: 'Create Your Custom Path',
    description:
      'We create a personalized treatment plan with natural restoration methods and holistic healing to support your long-term hair health.',
  },
];

const WhyWomenTrustSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 6 }}>
          Why Women Trust Hair Wellness Studio
        </Typography>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 4, height: '100%' }} elevation={2}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body1">
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyWomenTrustSection;
