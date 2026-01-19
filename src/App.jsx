import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { translations } from "./data/translations";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";
import VehicleDetails from "./pages/VehicleDetails";

export default function App() {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];

  return (
    <div className="app" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/vehicles" element={<Vehicles t={t} />} />
        <Route path="/vehicles/:id" element={<VehicleDetails t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
      </Routes>
    </div>
  );
}
