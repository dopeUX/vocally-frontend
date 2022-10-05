import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./GlobalStyles/globalStyles.css";
import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
