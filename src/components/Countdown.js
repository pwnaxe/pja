import React, { useState } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { Box, Slide, Snackbar, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CountdownPopup = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={isSmallScreen ? 10000 : null}
      sx={{ maxWidth: '100vw', }}
    >
      <Slide direction="up" in={open}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fddf2c',
            color: 'black',
            padding: theme.spacing(2),
            borderRadius: '20px',
          }}
        >
          <Typography variant="h8" align="center">
            <b>Do rozpoczęcia wydarzenia pozostało:</b>
          </Typography>
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
