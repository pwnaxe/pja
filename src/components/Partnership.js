import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tlo from '../assets/page/partnership.webp';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Partnership() {
  return (
    <>
      <Box>
        <Box component="img" src={Tlo} alt="tlo" />
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
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
        <Button variant="contained" endIcon={<SendIcon />} sx={{ backgroundColor: '#ffe200', color: 'black', borderRadius: '20px' }}>
          Zgłoszenie firmy
        </Button>
      </Box>
    </>
  );
};

export default Partnership;
