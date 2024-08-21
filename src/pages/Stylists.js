import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import stylists from '../data/stylistsData';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600')`, // Replace with your background image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(1px)',
    zIndex: -1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: -1,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: 300,
  margin: theme.spacing(2),
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  [theme.breakpoints.down('sm')]: {
    height: 200, 
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem', 
  },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function StylistCard({ name, specialty, bio, imgSrc }) {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={imgSrc}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div" color="black">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Specialty:</strong> {specialty}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

function Stylists() {
  return (
    <BackgroundContainer>
      <Container>
        <Box sx={{ textAlign: 'center', marginTop: 4, position: 'relative', zIndex: 1, padding: '0 2rem' }}>
          <StyledTypography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontFamily: 'Lobster, cursive', fontSize: '3rem', fontWeight: 'bold' }}
          >
            Meet Our Stylists
          </StyledTypography>
          <Typography variant="h6" component="h2" color="text.secondary" paragraph sx={{ color: 'white' }}>
            Our talented team of stylists is here to provide you with exceptional beauty services.
          </Typography>
        </Box>
        <CardContainer>
          {stylists.map((stylist) => (
            <StylistCard
              key={stylist.id}
              name={stylist.name}
              specialty={stylist.specialty}
              bio={stylist.bio}
              imgSrc={stylist.imgSrc}
            />
          ))}
        </CardContainer>
      </Container>
    </BackgroundContainer>
  );
}

export default Stylists;
