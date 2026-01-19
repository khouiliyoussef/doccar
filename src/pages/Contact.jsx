import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const WHATSAPP_NUMBER = "212612002231";

export default function Contact({ t }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const mapsLink = "https://maps.app.goo.gl/xLGCS5BnckiPtgnj8";

  // ✅ bouton WhatsApp (simple)
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour, je veux demander un devis."
  )}`;

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour, je veux un devis.\nNom: ${name}\nTéléphone: ${phone}\nMessage: ${msg}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact | CAR DOC</title>
        <meta
          name="description"
          content="Contactez CAR DOC : demande de devis, appel direct, WhatsApp, Instagram et localisation Google Maps."
        />
      </Helmet>

      <section className="contact">
        <h2>{t.contactTitle}</h2>

        <div className="contact-container">
          <div className="contact-flex">
            <form className="contact-form" onSubmit={onSubmit}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={t.contactName}
                required
              />
              <input type="email" placeholder={t.contactEmail} />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder={t.contactPhone}
                required
              />
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder={t.contactMessage}
                rows="5"
                required
              />
              <button type="submit">{t.contactBtn}</button>
            </form>

            <div className="contact-info">
              <div className="contact-card">
                <span>📞</span>
                <a href="tel:+212612002231">+212 612 002 231</a>
              </div>

              {/* ✅ NOUVEAU bouton WhatsApp */}
              <div className="contact-card">
                <span>💬</span>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>

              <div className="contact-card">
                <span>📍</span>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  Localisation (Google Maps)
                </a>
              </div>

              <div className="contact-card">
  <span>📸</span>
  <a
    href="https://www.instagram.com/doc_car1"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram <small style={{ opacity: 0.7 }}>(@doc_car1)</small>
  </a>
</div>

            </div>
          </div>

          <p className="copyright">
            © {new Date().getFullYear()} CAR DOC. Tous droits réservés.
          </p>
        </div>
      </section>
    </>
  );
}
