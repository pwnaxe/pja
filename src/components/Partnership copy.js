import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tlo from '../assets/page/partnership.webp';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

function Partnership() {
  const { t } = useTranslation();
  return (
    <Box id="dla-pracodawcy"
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
      }}
    >
      <Grid container spacing={5} sx={{ pt: { xs: 1, md: 10 }, pl: { xs: 0, md: 10 }, pr: { xs: 2, }, mb: 14, height: { xs: 250, md: 400 }, textAlign: { xs: 'left' } }} >
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, ml: { xs: 2, md: 15 }, mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
            {t('EmployersParticipation')}
          </Typography>
          <Typography sx={{ fontSize: '1.2rem', mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
            {t('DearEmployers')} <br />
            {t('InviteMessage')}<br />
            {t('Offer')}<br />
            {/* {t('MoreDetails')}<br />
            {t('Questions')} */}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} container alignItems="center" justifyContent="center" sx={{ pr: { xl: 15, } }}>
          {/* <Button id="kontakt"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ backgroundColor: '#ffe200', color: 'black', borderRadius: '20px' }}
          >
            {t('CompanyRegistration')}
          </Button> */}
        </Grid>
      </Grid>
    </Box >
  );
};

export default Partnership;
