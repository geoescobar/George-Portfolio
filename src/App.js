import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
