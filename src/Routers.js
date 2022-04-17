import React from "react";
import "./App.css";
import About from "./Frontpage.js/About";
import Home from "./Frontpage.js/Home";
import Navbar from "./Frontpage.js/Navbar";
import Services from "./Frontpage.js/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meenu from "./Frontpage.js/Meenu";
import Signform from "./Frontpage.js/Signform";
import Contact from "./Frontpage.js/Contact";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/Meenu" element={<Meenu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signform" element={<Signform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
