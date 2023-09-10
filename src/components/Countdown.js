import React, { useState } from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { Box, Slide, Snackbar, useMediaQuery, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const CountdownPopup = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();


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
          <Typography variant="h6" align="center">
            <b>{t('countdown.heading')}</b>
          </Typography>
          <FlipCountdown
            hideYear
            monthTitle={t('countdown.monthTitle')}
            dayTitle={t('countdown.dayTitle')}
            hourTitle={t('countdown.hourTitle')}
            minuteTitle={t('countdown.minuteTitle')}
            secondTitle={t('countdown.secondTitle')}
            size='extra-small'
            endAt={'2023-10-18 09:30:00'}
            onTimeUp={() => console.log(t('countdown.eventStarted'))}
          />
        </Box>
      </Slide>
    </Snackbar>
  );
};

export default CountdownPopup;
