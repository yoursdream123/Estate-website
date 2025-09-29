/*
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListProperty from "./pages/ListProperty";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-property" element={<ListProperty />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
}

export default App;
*/



import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import PropertyDetails from "./pages/PropertyDetails";
import DisclaimerPopup from './components/DisclaimerPopup'
import Hero from "./components/Hero";
import UserGuidelines from "./pages/UserGuidelines";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";


function App() {
  const location = useLocation()
    // 👇 in paths par Navbar hide karna hai
  const hideNavbarPaths = ["/add-property", "/properties/"];
  const hideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
    <DisclaimerPopup />
    {!hideNavbar && <Navbar />}   {/* Navbar sirf unhi pages par dikhayega jahan zarurat hai */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-guidelines" element={<UserGuidelines />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
    </>
  );
}

export default App;

