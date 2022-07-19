import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
