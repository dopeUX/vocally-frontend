import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./GlobalStyles/globalStyles.css";
import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import DetailsSection from "./components/DetailsSection/DetailsSection";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="divider"></div>
      <DetailsSection />
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default App;
