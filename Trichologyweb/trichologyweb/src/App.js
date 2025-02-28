
import React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Hero />
        <Box my={8}>
          <Services />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
