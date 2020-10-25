import React from "react";
import "./Assurances.css";

import Card from "./Card";

const assurances = () => {
  return (
    <section className="section w-100" id="assurances">
      <div className="container">
        <header className="text-center pt-4 mb-5">
          <h2 className="section-title">
            <span>Nous offrons une gamme complète</span> de fonctionnalités
          </h2>
        </header>
        <div className="row mb-3 justify-content-center">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default assurances;
