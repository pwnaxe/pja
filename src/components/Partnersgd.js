import React from 'react';
import Typography from '@mui/material/Typography';
import LogoSwipergd from './LogoSwipergd';
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
        {t('partners1gd')}
      </Typography>
      <div id="partnersgdansk">
        <LogoSwipergd />
      </div>
    </>
  );
};

export default Partners;
