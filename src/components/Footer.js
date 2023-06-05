import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tlo from '../assets/page/footer.webp';

const Footer = () => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      minHeight: '60vh',
      backgroundImage: `url(${Tlo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      pt: { xs: 3, }
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 400,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Kontakt
      </Typography>
      <Typography sx={{ fontSize: '1.55rem', }}>
        biurokarier@pja.edu.pl <br />
        telefon 22 584 45 88
      </Typography>
      <Typography sx={{ fontSize: '1.55rem', fontWeight: 'bold', mt: 5, }}>
        DORADCZYNI ZAWODOWA <br />
        Marta Mulik <br />
        mmulik@pja.edu.pl
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'center', md: 'flex-end' },
        pb: { xs: 0, md: 5 },
        pl: { xs: 0, md: 5 },
        boxSizing: 'border-box',
        flexWrap: 'wrap'
      }}
    >
      <img src="./Assets/page/pjatk2.webp" alt="Logo" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: 5,
          pb: { xs: 2, md: 0, },
          '& a': {
            textDecoration: 'none',
            color: 'white',
            fontSize: '2rem',
            fontFamily: 'Arial, sans-serif',
            mr: 5,
            border: 2,
            borderColor: 'white',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 1,
            minWidth: '3rem',
            textAlign: 'center'
          },
          '& a:last-child': {
            mr: { xs: 0, md: 5 },
          },
        }}
      >
        <Link href="https://www.facebook.com/BiuroKarierPJATK">FB</Link>
        <Link href="https://www.instagram.com/abk_pjatk">Insta</Link>
        <Link href="https://www.linkedin.com/company/85406761">LI</Link>
      </Box>
    </Box>
  </Box>
);

export default Footer;
