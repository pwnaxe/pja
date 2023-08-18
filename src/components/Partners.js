import React from 'react';
import Typography from '@mui/material/Typography';
import LogoSwiper from './LogoSwiper';
import { useTranslation } from 'react-i18next';

function Partners() {
  const { t } = useTranslation();
  return (
    <>
      <Typography id="wystawcy" variant="h3" sx={{
        fontWeight: 'bold', textAlign: 'center'
      }}>
        {t('partners')}
      </Typography>
      <Typography sx={{ fontSize: '1.2rem', textAlign: 'center' }}>
        {t('partners1')}
      </Typography>
      <LogoSwiper />
    </>
  );
};

export default Partners;
