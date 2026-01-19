import React, { useMemo, useState } from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { vehicles } from "../data/vehicles";

const WHATSAPP_NUMBER = "212612002231";

export default function VehicleDetails({ t }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = useMemo(() => vehicles.find((v) => v.id === id), [id]);
  const [activeImg, setActiveImg] = useState(0);

  if (!car) {
    return (
      <section className="details">
        <h2>Not found</h2>
        <button className="btn-primary" onClick={() => navigate("/vehicles")}>
          {t.navVehicles}
        </button>
      </section>
    );
  }

  const waText = `Bonjour, je suis intéressé(e) par ${car.name} (${car.year}) à ${car.price}. Est-elle disponible ?`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  return (
    <>
      <Helmet>
        <title>{car.name} {car.year} | CAR DOC</title>
        <meta
          name="description"
          content={`${car.name} (${car.year}) - ${car.price}. ${car.km}, ${car.fuel}, ${car.gearbox}. Contact WhatsApp rapide.`}
        />
      </Helmet>

      <section className="details">
        <button className="back-link" onClick={() => navigate("/vehicles")}>
          ← {t.backToVehicles}
        </button>

        <div className="details-grid">
          <div className="details-media">
            <img src={car.images[activeImg]} alt={car.name} className="details-img" />
            <div className="thumbs">
              {car.images.map((im, i) => (
                <img
                  key={i}
                  src={im}
                  alt={`${car.name}-${i}`}
                  className={`thumb ${i === activeImg ? "active-thumb" : ""}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          </div>

          <div className="details-info">
            <h1 className="details-title">{car.name}</h1>
            <p className="details-price">{car.price}</p>

            <div className="details-badges">
              <span className="badge">{car.year}</span>
              <span className="badge">{car.fuel}</span>
              <span className="badge">{car.gearbox}</span>
              <span className="badge">{car.km}</span>
            </div>

            <div className="details-actions">
              <a className="btn-primary" href={waLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn-secondary" href="tel:+212612002231">
                Appeler
              </a>
            </div>

            <div className="details-card">
              <h3>Informations</h3>
              <ul>
                <li><strong>Année :</strong> {car.year}</li>
                <li><strong>Carburant :</strong> {car.fuel}</li>
                <li><strong>Kilométrage :</strong> {car.km}</li>
                <li><strong>Boîte :</strong> {car.gearbox}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
