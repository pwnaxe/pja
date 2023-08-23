import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Laptop from '../assets/page/notebook.webp';
import Data from '../assets/page/data.webp';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={Laptop} alt="notebook" style={{ width: '45vh', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box id="o-wydarzeniu" sx={{ mt: 3, mr: { xs: 2, md: 15 }, ml: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h4" gutterBottom >
              {t('aboutEvent1.title')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t('aboutEvent1.line1')}<br />
              {t('aboutEvent1.line2')}<br />
              {t('aboutEvent1.line3')}
            </Typography>
          </Box>
        </Grid>
      </Grid>


      <Grid container spacing={5} sx={{ mt: 10 }}>
        <Grid item xs={12} md={6}>
          <Box id="agenda" sx={{ ml: { xs: 2, md: 15 }, mr: 5, mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h4" gutterBottom>
              {t('springEdition1.title')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {t('springEdition1.line1')}<br />
              {/* {t('springEdition1.line2')}<br />
              {t('springEdition1.line3')}<br />
              {t('springEdition1.line4')}<br />
              {t('springEdition1.line5')} */}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
          <Box display="flex" justifyContent="center">
            <img src={Data} alt="date" style={{ width: '30vh', height: 'auto' }}
            />
          </Box>
        </Grid>
      </Grid >
    </>
  );
};

export default About;