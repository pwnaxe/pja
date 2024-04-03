import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Tlo from '../assets/page/footer.webp';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    < Box id="kontakt"
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
        <Typography variant="h4" sx={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
          {t('footer.contact')}
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', }}>
          biurokarier@pja.edu.pl <br />
          {t('footer.phone')}
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', mt: 5, mb: 3 }}>
          {t('footer.careerAdvisors')}
        </Typography>
        <Grid container spacing={8} justifyContent="center" alignItems="stretch" sx={{ display: 'flex', }}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{ fontSize: '1.20rem', }}>
              <strong>Marta Mulik</strong> <br />
              mmulik@pja.edu.pl
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography sx={{ fontSize: '1.20rem', }}>
              <strong>Marzena Wodnicka</strong> <br />
              mwodnicka@pja.edu.pl
            </Typography>
          </Grid>
        </Grid>
      </Box >

      <Box
        sx={{
          mt: 25,
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
        <img src="../assets/page/pjatk2.webp" alt="Logo" />
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
};




export default Footer;
