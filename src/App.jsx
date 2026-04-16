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
    <div>
      <Header />
      <Hero />
      <Problems />
      <Services />
      <SecondHero />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
