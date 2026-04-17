import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Problems from "./Components/Problems.jsx";
import Services from "./Components/Services";
import SecondHero from "./Components/secondhero";
import Footer from "./Components/footer";
import Contact from "./Components/contact";

const App = () => {
  return (
    <BrowserRouter basename="/mxdelite">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
