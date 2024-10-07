import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Photobg from '../assets/page/top.webp';
import Logo from '../assets/page/logoabk.webp';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

function Top() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${Photobg})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: 'cover', xl: 'contain' },
          minHeight: '100vh',
          maxHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          opacity: { xs: 0.3, xl: 1 },
        }}
      ></Box>
      <Box sx={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Grid container spacing={2} direction="column">
          <Grid item sx={{ mb: 5, position: 'relative' }}>
            <Box component="img" src={Logo} alt="logoabk" sx={{ position: 'absolute', top: '10%', left: '5%' }} />
          </Grid>
          <Box sx={{ pl: { xs: 3, sm: 10 }, pt: 5 }}>
            <Grid item xs>
              <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' }, display: { xs: 'none', xl: 'block' } }}>
                {t('jobFair')}
              </Typography>
            </Grid>

            <Grid item xs>
              <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 3, textAlign: { xs: 'center', sm: 'left' } }}>
                {t('springEdition')}
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', textAlign: { xs: 'center', sm: 'left' } }}>
                {t('studentInfo')} <br />
                {t('studentInfo1')} <br /><br />
                {t('timeAndPlace')}
              </Typography>
            </Grid>


            {/* Zakomentowany Button, jeśli chcesz go użyć, wystarczy odkomentować */}
            <Grid item>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ backgroundColor: '#ffe200', color: 'black', borderRadius: '20px' }}
            onClick={() => window.open('https://forms.gle/ceagpTwNwfaX4S5j6', '_blank')}
          >
            {t('participate')}
          </Button>
        </Grid>

          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default Top;
