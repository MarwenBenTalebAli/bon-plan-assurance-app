import React from "react";
import AvantagesData from "./AvantagesData";
import "./AvantageCard.css";

const avantageCard = () => {
  const avantageCard = AvantagesData.map((card, index) => {
    return (
      <div key={index} className="col-6 col-md-3 text-center">
        <div className="box mt-4">
          <div className="box-inner">
            <div className="thumb">
              <img src={card.image} alt={card.alt} style={{ opacity: 1 }} />
            </div>
            <strong className="title">{card.title}</strong>
            <span className="description">{card.description}</span>
          </div>
        </div>
      </div>
    );
  });

  return avantageCard;
};

export default avantageCard;
