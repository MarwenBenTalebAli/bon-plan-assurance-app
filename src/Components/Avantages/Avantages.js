import React from "react";
import "./Avantages.css";

import AvantageCard from "./AvantageCard";

const avantages = () => {
  return (
    <section
      id="avantages"
      className="section w-100"
    >
      <div className="container">
        <header className="text-center pt-4 mb-5">
          <h2 className="section-title">
            <span>Pourquoi choisir Bon plan assurance</span> pour son assurance
            auto ?
          </h2>
        </header>
        <div className="row justify-content-center section-box">
          <AvantageCard />
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-success text-uppercase">Obtenir un tarif</button>
      </div>
    </section>
  );
};

export default avantages;
