import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <SocialLinks />
        <About/>
        <Portfolio/>
        <Technologies/>
        <Contact/>
    </div>
  );
}

export default App;
