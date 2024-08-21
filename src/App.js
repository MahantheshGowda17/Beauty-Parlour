import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar'; 
import Home from './pages/Home';
import Services from './pages/Services';
import Stylists from './pages/Stylists';
import Appointment from './pages/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavbarComponent /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stylists" element={<Stylists />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
