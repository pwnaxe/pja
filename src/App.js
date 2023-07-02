import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Top from "./components/Top";
import About from "./components/About";
import Partners from "./components/Partners";
import Gallery from "./components/Gallery";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import MyBook from "./components/MyBook";
import Box from "@mui/material/Box";
import Countdown from "./components/Countdown";

function App() {
  return (
    <>
      <Top />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', mt: 3, maxWidth: '100vw', backgroundColor: 'gray' }}>
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
      <Box sx={{ maxWidth: '100vw', mt: 5 }}>
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
