import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VehicleCard.css";

function VehicleCard({ id, images, name, price, year, fuel, km, gearbox, t }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);

  const nextImage = (e) => { e.stopPropagation(); setCurrentImg((p) => (p + 1) % images.length); };
  const prevImage = (e) => { e.stopPropagation(); setCurrentImg((p) => (p - 1 + images.length) % images.length); };

  const nextZoom = (e) => { e.stopPropagation(); setZoomIndex((p) => (p + 1) % images.length); };
  const prevZoom = (e) => { e.stopPropagation(); setZoomIndex((p) => (p - 1 + images.length) % images.length); };
  <Link className="details-btn" to={`/vehicles/${id}`}>
  {t?.viewDetails || "Voir détails"}
</Link>


  return (
    <>
      <div className="vehicle-card">
        <div className="vehicle-img-container">
          <img
            src={images[currentImg]}
            alt={name}
            className="vehicle-img"
            onClick={() => { setZoomOpen(true); setZoomIndex(currentImg); }}
          />
          {images.length > 1 && (
            <>
              <button className="prev-btn" onClick={prevImage}>◀</button>
              <button className="next-btn" onClick={nextImage}>▶</button>
            </>
          )}
        </div>

        <h3>{name}</h3>
        <p className="price">{price}</p>

        <ul className="vehicle-info">
          <li><strong>Année :</strong> {year}</li>
          <li><strong>Carburant :</strong> {fuel}</li>
          <li><strong>Kilométrage :</strong> {km}</li>
          <li><strong>Boîte :</strong> {gearbox}</li>
        </ul>

        <Link className="details-btn" to={`/vehicles/${id}`}>
          {t?.viewDetails || "Voir détails"}
        </Link>
      </div>

      {zoomOpen && (
        <div className="zoom-overlay" onClick={() => setZoomOpen(false)}>
          <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[zoomIndex]} alt={name} />
            {images.length > 1 && (
              <>
                <button className="prev-btn zoom-btn" onClick={prevZoom}>◀</button>
                <button className="next-btn zoom-btn" onClick={nextZoom}>▶</button>
              </>
            )}
            <button className="close-btn" onClick={(e) => { e.stopPropagation(); setZoomOpen(false); }}>✕</button>
          </div>
        </div>
      )}
    </>
  );
  
}

export default VehicleCard;
