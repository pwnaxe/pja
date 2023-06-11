import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Laptop from '../assets/page/notebook.webp';
import Data from '../assets/page/data.webp';

function About() {
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
              O wydarzeniu
            </Typography>
            <Typography variant="body1" gutterBottom>
              Targi Pracy PJATK są cyklicznie organizowanym wydarzeniem na kampusie Polsko-Japońskiej Akademii Technik Komputerowych.
              Podczas Targów Pracy, studenci i absolwenci mają okazję bezpośrednio porozmawiać z firmami oferującymi różnego rodzaju staże i stanowiska.
              <br /><br />
              Targi są też świetną okazją do nawiązania kontaktów z przedstawicielami firm z różnych branż.
            </Typography>
          </Box>
        </Grid>
      </Grid>


      <Grid container spacing={5} sx={{ mt: 10 }}>
        <Grid item xs={12} md={6}>
          <Box id="agenda" sx={{ ml: { xs: 2, md: 15 }, mr: 5, mt: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h4" gutterBottom>
              Co czeka na Was na wiosennej edycji Targów?
            </Typography>
            <Typography variant="body1" gutterBottom>
              - oferty pracy, praktyk i staży <br />
              - wielu przedstawicieli pracodawców, z którymi będziecie mieli okazję porozmawiać <br />
              - szybkie konsultacje z doradcami zawodowymi Akademickiego Biura Karier PJATK <br />
              - warsztaty i wykłady towarzyszące Targom Pracy (21.04), a także certyfikaty potwierdzające Wasz udział w warsztatach <br />
              - grywalizacja dla studentów: do wygrania nagrody!
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