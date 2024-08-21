import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import haircutImg from '../assets/haircut.jpg'; 
import facialImg from '../assets/facial.jpg'; 
import manicureImg from '../assets/manicure.jpg'; 
import makeupImg from '../assets/Makeup.jpg'; 




const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
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
  maxWidth: 7000,
  margin: theme.spacing(2),
  borderRadius: '100',
  boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  overflow: 'hidden',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
}));


const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  overflowX: 'auto', 
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  gap: theme.spacing(2),
}));

function ServiceCard({ title, description, imgSrc }) {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        height="250"
        image={imgSrc}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

function Home() {
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
            Services provided by us
          </StyledTypography>
          <StyledTypography variant="h5" component="h2" gutterBottom sx={{ fontSize: '1.5rem' }}>
            Experience the best beauty treatments
          </StyledTypography>
        </Box>
        <CardContainer>
          <ServiceCard
            title="Haircut Style"
            description="Get a stylish and trendy haircut that suits your personality."
            imgSrc={haircutImg}
          />
          <ServiceCard
            title="Facial Treatment"
            description="Enjoy a relaxing facial treatment that revitalizes your skin."
            imgSrc={facialImg}
          />
          <ServiceCard
            title="Manicure & Pedicure"
            description="Experience luxurious manicure and pedicure services."
            imgSrc={manicureImg}
          />
          <ServiceCard
            title="Makeup Services"
            description="Experience luxurious makeup services for every occasion."
            imgSrc={makeupImg}
          />
        </CardContainer>
      </Container>
    </BackgroundContainer>
  );
}

export default Home;
