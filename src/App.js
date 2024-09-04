import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './Components/HotelSection/Landingpage';
import Landing from './Components/LandingPage/Landing';
import Homedelivery from './Components/LandingPage/homedelivery';
import Navbar from './Components/Navbar/Navbar';
import Contactus from './Components/Contactus/Contactus';
import Gallery from './Components/Gallery/Galleryfile';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} exact/>
        <Route path="/restaurants" element={<Landing />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/homedelivery" element={<Homedelivery />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
