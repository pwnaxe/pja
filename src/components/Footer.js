import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tlo from '../assets/page/footer.webp';

function Footer() {
  return (
    <>
      <Box sx={{
        position: 'Relative',
        bottom: 0,
        backgroundImage: `url(${Tlo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Kontakt
        </Typography>
        <Typography sx={{ fontSize: '1.2rem' }}>
          biurokarier@pja.edu.pl
          <br />
          telefon 22 584 45 88
        </Typography>
        <Typography sx={{ fontSize: '1.2rem' }}>
          DORADCZYNI ZAWODOWA
          <br />
          Marta Mulik
          mmulik@pja.edu.pl
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
