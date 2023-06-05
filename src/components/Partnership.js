import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tlo from '../assets/page/partnership.webp';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';

function Partnership() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Tlo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fit',
        backgroundPosition: 'left',
        width: '100%',
        pb: 5,
        pt: 5,
      }}
    >
      <Grid container spacing={5} sx={{ pt: 2, pl: { xs: 2, md: 10 }, pr: { xs: 2, }, textAlign: { xs: 'center' } }} >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            Pracodawcy - udział w Targach
          </Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>
            Drodzy Pracodawcy, serdecznie zapraszamy do wypełnienia formularza zgłoszeniowego na Targi Pracy PJATK - edycja wiosna 2023.
            Oferujemy Państwu stoiska 2x2 m2 oraz 2x3 m2 oraz możliwość udziału w wydarzeniach towarzyszących Targom Pracy PJATK.
            <br /><br />
            Więcej szczegółów znajdą Państwo w formularzu.
            <br /><br />
            W razie pytań, zapraszamy do kontaktu z biurokarier@pjwstk.edu.pl
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ backgroundColor: '#ffe200', color: 'black', borderRadius: '20px' }}
          >
            Zgłoszenie firmy
          </Button>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Partnership;
