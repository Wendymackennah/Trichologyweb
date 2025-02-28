// src/components/FAQSection.js
import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Will this really work for my hair loss?',
    answer:
      'At Hair Wellness Studio, we’ve assisted thousands of women facing different types of hair loss in various stages. Our holistic approach targets the root cause of each individual’s unique situation.',
  },
  {
    question: 'How soon will I see changes?',
    answer:
      'Each person’s journey is unique, but many of our clients start seeing visible improvements in as little as 8-12 weeks, depending on their specific condition.',
  },
  {
    question: 'Are your treatments suitable for all hair types and conditions?',
    answer:
      'Yes, our team is trained to handle a wide range of hair types, textures, and conditions. Your treatment plan will be personalized to your needs.',
  },
  {
    question: 'Are the treatments safe and non-invasive?',
    answer:
      'We use a combination of natural therapies, nutritional support, and non-invasive procedures to ensure the highest level of safety and comfort.',
  },
  {
    question: 'How often do I need to visit for treatments to be effective?',
    answer:
      'Frequency of visits depends on your personalized plan. We work with you to create a schedule that fits your lifestyle and maximizes results.',
  },
];

const FAQSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          Common Concerns
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
