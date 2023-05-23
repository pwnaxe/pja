import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Top from "./components/Top";
import About from "./components/About";
import Partners from "./components/Partners";
import Gallery from "./components/Gallery";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Nav />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Top />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      </Box>
      <Box sx={{ minHeight: '100vh' }}>
        <About />
      </Box>
      <Box sx={{ minHeight: '100vh' }}>
        <Partners />
      </Box>
      <Box sx={{ minHeight: '100vh' }}>
        <Gallery />
      </Box>
      <Box sx={{ minHeight: '100vh', maxWidth: '100vw' }}>
        <Partnership />
      </Box>
      <Footer />
    </>
  );
}

export default App;
