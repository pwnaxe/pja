import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import Navgd from "./components/Navgd";
import Top from "./components/Top";
import Topgd from "./components/Topgd";
import Popup from "./components/Popup";
import About from "./components/About";
import Aboutgd from "./components/Aboutgd";
import Partners from "./components/Partners";
import Partnersgd from "./components/Partnersgd";
import Gallery from "./components/Gallery";
import Gallerygd from "./components/Gallerygd";
import Partnership from "./components/Partnership";
import Partnershipgd from "./components/Partnershipgd";
import Footer from "./components/Footer";
import Footergd from "./components/Footergd";
import MyBook from "./components/MyBook";
import Box from "@mui/material/Box";
import Countdown from "./components/Countdown";
import Countdowngd from "./components/Countdowngd";
import './i18n';
import i18n from './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/gda" element={<GdanskComponent />} />
        <Route path="/wwa" element={<WarszawaComponent />} />
      </Routes>
    </Router>
  );
}

function MainComponent() {
  return (
    <div id="main">
      <Popup />
    </div>
  );
}

function WarszawaComponent() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);


  return (
    <>
      <Top />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        mt: 3,
        maxWidth: '100vw',
        backgroundColor: 'gray',
        py: 3,
      }}>
        <MyBook />
      </Box>
      <Box sx={{ minHeight: '100vh', mt: 10, maxWidth: '100vw' }}>
        <About />
      </Box>
      <Box sx={{ mt: 10, pb: 10, maxWidth: '100vw' }}>
        <Partners />
      </Box>
      <Box sx={{ maxWidth: '100vw' }}>
        <Gallery />
      </Box>
      <Box sx={{ maxWidth: '100vw' }}>
        <Partnership />
      </Box>
      <Box sx={{ maxWidth: '100vw' }}>
        <Footer />
      </Box>
      <Nav />
      <Countdown />
    </>
  );
}

function GdanskComponent() {
  return (
    <>
      <Topgd />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        mt: 3,
        maxWidth: '100vw',
        backgroundColor: 'gray',
        py: 3,
      }}>
        <MyBook />
      </Box>
      <Box sx={{ minHeight: '100vh', mt: 10, maxWidth: '100vw' }}>
        <Aboutgd />
      </Box>
      <Box sx={{ mt: 10, pb: 10, maxWidth: '100vw' }}>
        <Partnersgd />
      </Box>
      <Box sx={{ maxWidth: '100vw' }}>
        <Gallerygd />
      </Box>
      <Box sx={{ maxWidth: '100vw', mt: 12 }}>
        <Partnershipgd />
      </Box>
      <Box sx={{ maxWidth: '100vw' }}>
        <Footergd />
      </Box>
      <Navgd />
      <Countdowngd />
    </>
  );
}
export default App;
