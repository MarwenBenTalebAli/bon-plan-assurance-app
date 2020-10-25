import React from "react";
import { Jumbotron } from "react-bootstrap";
import introImage from "../../assets/images/intro_image.jpg";

import "./Presentation.css";

const presentation = () => {
  return (
    <section className="section w-100" id="presentation">
      <Jumbotron fluid={true} className="m-0">
        <div className="container h-100">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 align-items-center m-auto">
              <h2 className="section-title text-center text-md-left mb-3">
                À propos de nous
              </h2>
              <div className="section-text mb-3 ">
                <p className="text">
                  Bon Plan Assurances a pour objet l’assurance et la réassurance
                  de tous les risques pouvant entraîner tous dommages, tant
                  corporels que matériels ou immatériels ainsi que tous les
                  risques de responsabilité civile, professionnelle ou autre. La
                  société a pour but d’exercer l’industrie de l’assurance dans
                  toutes les branches et faire toutes sortes d’opérations de
                  garantie et d’indemnité, au respect de nos valeurs mutualistes
                  mis au service de nos adhérents, qu'ils soient particuliers,
                  travailleurs indépendants, salariés, ou entreprises. La
                  proximité, la qualité de nos services et de nos gammes
                  produits, les valeurs de solidarité qui nous animent, sont les
                  principaux atouts de Bon Plan Assurances.
                </p>
              </div>
              <div className="section-btn">
                <button className="btn btn-success text-uppercase">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 align-items-center mt-4">
              <img
                src={introImage}
                className="img-fluid intro-image"
                alt="IntroImage"
              />
            </div>
          </div>
        </div>
      </Jumbotron>
    </section>
  );
};

export default presentation;
