import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const teamMembers = [
  {
    firstName: 'Valya',
    lastName: 'Strizheus',
    role: 'Developer',
    image: '/cute-poodle-dog-illustration_806257-200.avif',
    GitHub: 'https://github.com/valyastriz',
  },
  {
    firstName: 'Ashley',
    lastName: 'Wright',
    role: 'Developer',
    image: '/istockphoto-1385404682-612x612.jpg',
    GitHub: 'https://github.com/ajwmp93',
  },
  {
    firstName: 'Kendra',
    lastName: 'DeFrancisco',
    role: 'Developer',
    image: '/a5c9a26a62ebd3fc0bdf2ad6a866b665.jpg',
    GitHub: 'https://github.com/defrak2',
  },
];

const Contact = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4,
    minHeight: '80vh', backgroundColor: theme.background.default, paddingTop: '30px' }}>
      <Typography variant='h3' sx={{ paddingTop: '30px', marginBottom: 10, textAlign: 'center', color: theme.text.primary}}>
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
                href={member.GitHub} 
                target="_blank" 
                rel="noopener noreferrer" 
              >
                GitHub
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Typography variant='h5' sx={{ marginTop: 4, textAlign: 'center', color: theme.text.primary, marginTop: 10}}>
        Please feel free to check out our personal GitHub accounts by clicking one of the buttons above.
      </Typography>
    </Box>
  );
};

export default Contact;