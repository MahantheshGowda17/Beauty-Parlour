import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600')`,
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

const HeaderContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(2),
  color: '#fff',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(2),
  width: '100%',
  maxWidth: '1200px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const TextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  color: '#fff',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

// Slider container
const SliderContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: '600px',
  margin: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    margin: theme.spacing(0),
  },
}));

const SlideImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '15px',
});

function Home() {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    'https://images.pexels.com/photos/361754/pexels-photo-361754.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/1806205633/photo/young-woman-enjoying-while-getting-her-hair-washed-by-professional-hairdresser.jpg?s=2048x2048&w=is&k=20&c=pFrZ0zQBEVgZxkgcyKw_l2E9M3z-YElpgZuyTDHj4v0=',
    'https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3992863/pexels-photo-3992863.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3762642/pexels-photo-3762642.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1328545/pexels-photo-1328545.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3738348/pexels-photo-3738348.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=600',
    
  ];

  return (
    <BackgroundContainer>
      <HeaderContent>
        <StyledTypography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontFamily: 'Lobster, cursive', fontSize: '3rem', fontWeight: 'bold' }}
        >
          Welcome to Our Beauty Parlour
        </StyledTypography>
        <StyledTypography variant="h5" component="h2" gutterBottom sx={{ fontSize: '1.5rem' }}>
          Experience the best beauty treatments and services.
        </StyledTypography>
      </HeaderContent>
      <ContentBox>
        <SliderContainer>
          <Slider {...sliderSettings}>
            {images.map((imgSrc, index) => (
              <Box key={index}>
                <SlideImage src={imgSrc} alt={`Slide ${index + 1}`} />
              </Box>
            ))}
          </Slider>
        </SliderContainer>
        <TextContent>
          <StyledTypography
            variant="body1"
            component="p"
            sx={{ fontSize: '1.2rem', marginTop: 0, textAlign: 'justify' }}
          >
            Beauty is not just about looking good; it's about feeling confident and elegant. At our beauty parlour, we
            believe in enhancing your natural beauty with our range of expert treatments. Whether you're looking for a
            refreshing facial, a stylish new haircut, or a relaxing manicure, our skilled professionals are here to
            provide the best services tailored to your needs.
          </StyledTypography>
          <StyledTypography
            variant="body1"
            component="p"
            sx={{ fontSize: '1.2rem', marginTop: 2, textAlign: 'justify' }}
          >
            Our salon is a haven of tranquility, designed to provide you with a luxurious and soothing experience. We
            use the finest products and the latest techniques to ensure you leave feeling rejuvenated and beautiful. Let
            us help you discover the elegance within, because every person deserves to feel beautiful every day.
          </StyledTypography>
        </TextContent>
      </ContentBox>
    </BackgroundContainer>
  );
}

export default Home;
