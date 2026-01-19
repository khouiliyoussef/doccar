import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import img from "../images/audi.jpg";
import img1 from "../images/imgmerc.jpg";
import merc from "../images/meer.jpg";
import Services from "../components/Services";

const WHATSAPP_NUMBER = "212612002231";

export default function Home({ t }) {
  const navigate = useNavigate();
  const heroImages = [img, img1, merc];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((p) => (p + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour, je veux demander un devis / infos."
  )}`;

  return (
    <>
      <Helmet>
        <title>CAR DOC | Achat & vente de voitures d'occasion au Maroc</title>
        <meta
          name="description"
          content="CAR DOC vous accompagne pour acheter ou vendre votre voiture d'occasion au Maroc : inspection, vérification des documents et transaction sécurisée."
        />
      </Helmet>

      <section className="hero">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index}`}
            className={`hero-img ${index === currentHero ? "active" : ""}`}
          />
        ))}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              {t.heroBtnContact}
            </button>

            <button className="btn-secondary" onClick={() => navigate("/about")}>
              {t.heroBtnAbout}
            </button>

            <a className="btn-whatsapp" href={waLink} target="_blank" rel="noreferrer">
              {t.heroBtnWhatsApp}
            </a>
          </div>

          <div className="hero-badges">
            <span className="badge">{t.heroBadge1}</span>
            <span className="badge">{t.heroBadge2}</span>
            <span className="badge">{t.heroBadge3}</span>
          </div>
        </div>
      </section>

      <Services t={t} />
    </>
  );
}
