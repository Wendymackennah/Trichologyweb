// src/components/TestimonialsSection.js
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const testimonials = [
  {
    name: 'Jessica T.',
    timeFrame: '40-week transformation',
    beforeImg: 'https://via.placeholder.com/300x300?text=Before',
    afterImg: 'https://via.placeholder.com/300x300?text=After',
    quote:
      'I had tried everything to fix my thinning hair, but nothing worked until I came to Hair Wellness Studio. The team really listened to my concerns and created a personalized plan for me. The results have been incredible—my hair is fuller, and I finally feel like myself again!',
  },
  {
    name: 'Monica J.',
    timeFrame: '50-week transformation',
    beforeImg: 'https://via.placeholder.com/300x300?text=Before',
    afterImg: 'https://via.placeholder.com/300x300?text=After',
    quote:
      'I had struggled with hair loss for years and felt so self-conscious about it. Hair Wellness Studio not only helped me understand the root cause but also gave me a clear path to recovery. Now, my hair is growing back, and I feel more confident than ever!',
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          Atlanta Women Share Their Hair Revival Stories
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6 }}>
          We’ve supported more than 3,000 women in restoring their confidence and embracing the beauty of healthy hair. Explore their true stories of transformation and renewed hope.
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 2 }} elevation={2}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box
                      component="img"
                      src={t.beforeImg}
                      alt="Before"
                      sx={{ width: '100%', borderRadius: 1 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      component="img"
                      src={t.afterImg}
                      alt="After"
                      sx={{ width: '100%', borderRadius: 1 }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {t.quote}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1, fontStyle: 'italic' }}>
                  {t.name} ({t.timeFrame})
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
