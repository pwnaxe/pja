import React, { useState } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { Box, Slide, Snackbar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CountdownPopup = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: matches ? 'right' : 'left' }}
      autoHideDuration={10000}
      sx={{ maxWidth: '100vw', }}
    >
      <Slide direction="up" in={open}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fddf2c',
            color: 'black',
            padding: theme.spacing(2),
            borderRadius: '20px',
          }}
        >
          <FlipCountdown
            hideYear
            monthTitle='Miesiące'
            dayTitle='Dni'
            hourTitle='Godziny'
            minuteTitle='Minuty'
            secondTitle='Sekundy'
            size='extra-small'
            endAt={'2023-11-19 10:00:00'}
            onTimeUp={() => console.log("Wydarzenie rozpoczęte ⏳")}
          />
        </Box>
      </Slide>
    </Snackbar>
  );
};

export default CountdownPopup;
