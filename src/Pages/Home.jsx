import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Navbar */}
      <Navbar />
 
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

    </div>
  );
}

export default Home;
