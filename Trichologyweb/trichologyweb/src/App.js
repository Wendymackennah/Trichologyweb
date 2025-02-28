
// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import ConfidenceSection from './components/ConfidenceSection';
import WhyWomenTrustSection from './components/WhyWomenTrustSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <JourneySection />
      <ConfidenceSection />
      <WhyWomenTrustSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
