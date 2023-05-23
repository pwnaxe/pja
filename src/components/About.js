import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Laptop from '../assets/page/notebook.webp';
import Data from '../assets/page/data.webp';

function About() {
  return (
    <>
      <Box>
        <Box component="img" src={Laptop} alt="notebook" />
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          O wydarzeniu
        </Typography>
        <Typography sx={{ fontSize: '1.2rem' }}>
          Targi Pracy PJATK są cyklicznie organizowanym wydarzeniem na kampusie Polsko-Japońskiej Akademii Technik Komputerowych. Podczas Targów Pracy, studenci i absolwenci mają okazję bezpośrednio porozmawiać z firmami oferującymi różnego rodzaju staże i stanowiska. <br /><br />
          Targi są też świetną okazją do nawiązania kontaktów z przedstawicielami firm z różnych branż.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Co czeka na Was na wiosennej edycji Targów?
        </Typography>
        <Typography sx={{ fontSize: '1.2rem' }}>
          - oferty pracy, praktyk i staży
          - wielu przedstawicieli pracodawców, z którymi będziecie mieli okazję porozmawiać
          - szybkie konsultacje z doradcami zawodowymi Akademickiego Biura Karier PJATK
          - warsztaty i wykłady towarzyszące Targom Pracy (21.04), a także certyfikaty potwierdzające Wasz udział w warsztatach
          - grywalizacja dla studentów: do wygrania nagrody!
        </Typography>
        <Box component="img" src={Data} alt="date" />
      </Box>
    </>
  );
};

export default About;
