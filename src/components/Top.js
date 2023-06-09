import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Photobg from '../assets/page/top.png';
import Photobgm from '../assets/page/topmob.png';
import Logo from '../assets/page/logoabk.webp';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Top() {
  return (
    <Box sx={{
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
    }}>
      <Grid container spacing={2} direction="column"
        justifyContent={{ xs: 'center', sm: 'flex-start' }}
        alignItems={{ xs: 'center', sm: 'flex-start' }}
        sx={{
          pl: { xs: 2, sm: '3vw', md: '4vw', lg: '4vw', xl: '10vw' },
          pt: { xs: '5%', sm: 10, lg: '0' },
          width: { xs: '80%', sm: 'auto', lg: '40%', xl: '100%' }
        }}
      >
        <Grid item>
          <Box
            component="img"
            src={Logo}
            alt="logoabk"
            sx={{
              position: { xs: 'absolute', sm: 'relative', lg: 'absolute', xl: 'relative' },
              top: { xs: '10%', sm: 'auto', lg: '15%', xl: 'auto' },
              left: { xs: '5%', sm: 'auto', }
            }}
          />
        </Grid>
        <Grid item>
          <Box display={{ xs: 'none', xl: 'block' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}>
              Targi <br /> Pracy <br /> PJATK
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
