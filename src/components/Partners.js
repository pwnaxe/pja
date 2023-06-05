import React from 'react';
import Typography from '@mui/material/Typography';
import LogoSwiper from './LogoSwiper';

function Partners() {
  return (
    <>
      <Typography variant="h3" sx={{
        fontWeight: 'bold', textAlign: 'center'
      }}>
        Wystawcy
      </Typography>
      <Typography sx={{ fontSize: '1.2rem', textAlign: 'center' }}>
        Uczestnicy wiosennej edycji
      </Typography>
      <LogoSwiper />
    </>
  );
};

export default Partners;
