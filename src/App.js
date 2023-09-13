import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import Top from "./components/Top";
import Popup from "./components/Popup";
import About from "./components/About";
import Partners from "./components/Partners";
import Gallery from "./components/Gallery";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import MyBook from "./components/MyBook";
import Box from "@mui/material/Box";
import Countdown from "./components/Countdown";
import './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gdansk" element={<GdanskComponent />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}

function MainComponent() {
  return (
    <>
      <Top />
      <Popup />
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
      <Box sx={{ maxWidth: '100vw', mt: 12 }}>
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
      <Box sx={{ maxWidth: '100vw', mt: 12 }}>
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
export default App;
