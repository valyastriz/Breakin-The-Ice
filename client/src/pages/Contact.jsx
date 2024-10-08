import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const teamMembers = [
  {
    firstName: 'Valya',
    lastName: 'Strizheus',
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
    email: 'valya@example.com',
  },
  {
    firstName: 'Ashley',
    lastName: 'Wright',
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
    email: 'ashley@example.com',
  },
  {
    firstName: 'Kendra',
    lastName: 'DeFrancisco',
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
    email: 'kendra@example.com',
  },
];

const Contact = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4, minheight: '100%',
    height: '100vh', backgroundColor: theme.background.default }}>
      <Typography variant='h3' sx={{ marginBottom: 4, textAlign: 'center', color: theme.text.primary}}>
        Meet Our Team
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
        {teamMembers.map((member, index) => (
          <Card key={index} sx={{ maxWidth: 345, boxShadow: 3, backgroundColor: theme.background.highlight }}>
            <CardMedia
              component="img"
              alt={member.name}
              height="140"
              image={member.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{color: theme.text.primary}}>
              {member.firstName}<br />
                {member.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{color: theme.text.primary}}>
                {member.role}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{
                  marginTop: 2,
                  backgroundColor: theme.background.accent,
                  color: theme.text.primary,
                  mb: 3,
                  ':hover': {
                    backgroundColor: theme.background.primary,
                  },
                }}
                href={`mailto:${member.email}`}
              >
                Contact
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Typography variant='h5' sx={{ marginTop: 4, textAlign: 'center', color: theme.text.primary}}>
        For more information, feel free to reach out to any one of us at the above contact buttons.
      </Typography>
    </Box>
  );
};

export default Contact;