import React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Photobg from '../assets/page/top.png';
import Logo from '../assets/page/logoabk.webp';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Top() {
  return (
    <Box sx={{
      position: 'absolute',
      top: 0,
      backgroundImage: `url(${Photobg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{ pl: '3vw' }}>
        <Grid item>
          <Box component="img" src={Logo} alt="logoabk" />
        </Grid>
        <Grid item>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Targi <br /> Pracy <br /> PJATK
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Targi Pracy PJATK wiosenna edycja - już 20 kwietnia 2023!
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: '1.2rem' }}>
            Studencie i Absolwencie nie przegap możliwości rozmów z czołowymi pracodawcami <br />
            oraz innych atrakcji podczas Targów. <br /><br />
            Widzimy się od 9:30 do 16:30 w budynku A.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" endIcon={<SendIcon />} sx={{ backgroundColor: '#ffe200', color: 'black', borderRadius: '20px', }}>
            Zadeklaruj swój udział
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Top;
