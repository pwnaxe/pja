import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import Photobg from '../assets/page/top.png';
import Photobgm from '../assets/page/topmob.png';
import Logo from '../assets/page/logoabk.webp';

function Top() {
  const responsiveBackground = {
    backgroundImage: {
      xs: `url(${Photobgm})`,
      sm: `url(${Photobg})`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: { xs: '50%', sm: 'contain' },
    backgroundPosition: { xs: 'bottom right', sm: 'top right' },
    width: '100%',
    minHeight: { xs: '100vh', sm: 'auto', lg: '100vh' },
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'center',
  };

  const containerStyles = {
    pl: { xs: 2, sm: '3vw', md: '4vw', lg: '4vw', xl: '10vw' },
    pt: { xs: '5%', sm: 10, lg: '0' },
    width: { xs: '80%', sm: 'auto', lg: '40%', xl: '100%' },
  };

  const logoPosition = {
    position: { xs: 'absolute', sm: 'relative', lg: 'absolute', xl: 'relative' },
    top: { xs: '10%', sm: 'auto', lg: '15%', xl: 'auto' },
    left: { xs: '5%', sm: 'auto', }
  };

  return (
    <Box sx={responsiveBackground}>
      <Grid container spacing={2} direction="column"
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        sx={containerStyles}
      >
        <Grid item sx={{ mb: 5 }}>
          <Box component="img" src={Logo} alt="logoabk" sx={logoPosition} />
        </Grid>

        <Grid item>
          <Box display={{ xs: 'none', xl: 'block' }}>
            <Typography variant="h2" sx={{ ml: -2, fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}>
              Targi Pracy PJATK
            </Typography>
          </Box>
        </Grid>

        <Grid container direction="column" alignItems={{ xs: 'center', sm: 'flex-start' }} sx={{ maxWidth: { xs: '100%', sm: '40%', md: '40%', lg: '100%' } }}>
          <Grid item>
            <Typography variant='h5' sx={{ fontWeight: 'bold', pb: { xs: 3, xl: '0', }, textAlign: { xs: 'center', sm: 'left' } }}>
              Targi Pracy PJATK wiosenna edycja - już 20 kwietnia 2023!
            </Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ fontSize: '1.2rem', textAlign: { xs: 'center', sm: 'left' } }}>
              Studencie i Absolwencie nie przegap możliwości rozmów z czołowymi pracodawcami <br />
              oraz innych atrakcji podczas Targów. <br /><br />
              Widzimy się od 9:30 do 16:30 w budynku A.
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="contained" endIcon={<SendIcon />} sx={{ backgroundColor: '#ffe200', color: 'black', borderRadius: '20px', }}>
            Zadeklaruj swój udział
          </Button>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Top;
