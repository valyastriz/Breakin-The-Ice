import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme(); // Access the theme

 
  return (
    <Container sx={{ padding: 4, backgroundColor: theme.palette.background.paper, borderRadius: 2, boxShadow: 2, minheight: '100%', height: '100vh' }}>
      <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
        <Typography variant="h3" sx={{ marginBottom: 6, color: theme.palette.primary.main }}>
          About This Project
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Your go-to resource for icebreaker questions, fun facts, and inspiring quotes.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 800, margin: '0 auto' }}> 
        <Typography variant="body1" sx={{ marginBottom: 6, lineHeight: 1.6, color: theme.palette.text.primary }}>
          In today's fast-paced world, starting a conversation can sometimes feel daunting. Our project is designed to break down those barriers and help individuals connect with each other in a meaningful way. 
          Whether you're in a professional setting, attending a social gathering, or participating in a team-building event, we provide a variety of icebreaker questions, engaging facts, and thought-provoking quotes to spark conversations.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 6, lineHeight: 1.6 }}>
          Our collection of icebreaker questions is tailored to help people open up and share experiences, making it easier to get to know one another. From light-hearted questions to deeper, more insightful inquiries, there's something for everyone.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 6, lineHeight: 1.6 }}>
          Additionally, we include fascinating facts and quotes to inspire discussions and encourage participants to share their thoughts and feelings. Whether you're looking to foster camaraderie among team members or simply want to break the ice with new acquaintances, our resource serves as the perfect toolkit.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 6, lineHeight: 1.6 }}>
          Join us in creating a more connected world, one conversation at a time. Explore our icebreaker resources and discover the power of conversation!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
