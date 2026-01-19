import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { vehicles } from "../data/vehicles";
import VehicleCard from "../VehicleCard";

export default function Vehicles({ t }) {
  const carsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(vehicles.length / carsPerPage);

  const currentCars = useMemo(() => {
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    return vehicles.slice(indexOfFirstCar, indexOfLastCar);
  }, [currentPage]);

  return (
    <>
      <Helmet>
        <title>Nos véhicules | CAR DOC</title>
        <meta
          name="description"
          content="Découvrez nos voitures disponibles : prix, année, kilométrage, carburant et boîte. Contact WhatsApp rapide."
        />
      </Helmet>

      <section className="vehicles">
        <h2>{t.vehiclesTitle}</h2>

        <div className="vehicles-grid">
          {currentCars.map((v) => (
            <VehicleCard key={v.id} {...v} t={t} />
          ))}
        </div>

        <div className="vehicle-pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            {t.prev}
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            {t.next}
          </button>
        </div>
      </section>
    </>
  );
}
