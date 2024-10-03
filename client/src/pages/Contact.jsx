import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

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
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
      <Typography variant='h3' sx={{ marginBottom: 4, textAlign: 'center' }}>
        Meet Our Team
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
        {teamMembers.map((member, index) => (
          <Card key={index} sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt={member.name}
              height="140"
              image={member.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {member.firstName}<br />
                {member.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.role}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ marginTop: 2 }} 
                href={`mailto:${member.email}`}
              >
                Contact
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Typography variant='h5' sx={{ marginTop: 4, textAlign: 'center' }}>
        For more information, feel free to reach out to any one of us at the above contact buttons.
      </Typography>
    </Box>
  );
};

export default Contact;