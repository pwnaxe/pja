import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tlo from '../assets/page/partners.webp';

function Partners() {
  return (
    <>
      <Box component="img" src={Tlo} alt="Tlo" />
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        Wystawcy
      </Typography>
      <Typography sx={{ fontSize: '1.2rem' }}>
        Uczestnicy wiosennej edycji
      </Typography>
    </>
  );
};

export default Partners;
