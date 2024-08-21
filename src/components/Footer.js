import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F7C6C7',
        color: 'white',
        padding: 2,
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Typography variant="body2" color="black">
          &copy; 2024 Beauty Parlour. All rights reserved.
        </Typography>
        <Typography variant="body2" color="black">
          Contact us: info@glowstudio.com | +123 456 7890
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
