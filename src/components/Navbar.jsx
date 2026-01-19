import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.JPG";

export default function Navbar({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="CAR DOC Logo" className="logo" />
        <span>CAR DOC</span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" end onClick={closeMenu}>{t.navHome}</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>{t.navAbout}</NavLink></li>
        <li><NavLink to="/vehicles" onClick={closeMenu}>{t.navVehicles}</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>{t.navContact}</NavLink></li>
      </ul>

      <div className="lang-switch">
        <button onClick={() => setLang("fr")} className={lang === "fr" ? "lang-active" : ""}>FR</button>
        <button onClick={() => setLang("ar")} className={lang === "ar" ? "lang-active" : ""}>AR</button>
      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}
