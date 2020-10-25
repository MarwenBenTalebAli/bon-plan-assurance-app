import React, { createRef, useRef, useState } from "react";
import CardData from "./CardData";
import "./Card.css";

const Card = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [currentId, setcurrentId] = useState(0);

  let refs = useRef(
    [...new Array(6)].map((index) => createRef("g_" + index))
  );

  const onMouseOverHandler = (e, cardImageBlanc) => {
    setcurrentId(Number(e.target.id.slice(2, 3)));
    setMouseHover(true);
    refs.current.currentSrc = cardImageBlanc;
  };
  const onMouseLeaveHandler = (e, cardImage) => {
    setcurrentId(0);
    setMouseHover(false);
    refs.current.currentSrc = cardImage;
  };

  const card = CardData.map((card, index) => {
    const cardImage = card.cardImage;
    const cardImageBlanc = card.cardImageBlanc;
    const cardTitle = card.cardTitle;
    const cardDescription = card.cardDescription;
    const alt = card.alt;
    return (
      <div key={index+1} className="col-12 col-md-4 themed-grid-col">
        <div
          className="card m-auto"
          id={"c_"+(index+1)}
          onMouseOver={(e) => onMouseOverHandler(e, cardImageBlanc)}
          onMouseLeave={(e) => onMouseLeaveHandler(e, cardImage)}
        >
          <div className="icon1 mt-3 ml-3"
          id={"o_" + (index+1)}
          onMouseOver={(e) => onMouseOverHandler(e, cardImageBlanc)}
          onMouseLeave={(e) => onMouseLeaveHandler(e, cardImage)}>
            <img
              id={"g_" + (index+1)}
              ref={refs.current[index]}
              onMouseOver={(e) => onMouseOverHandler(e, cardImageBlanc)}
              onMouseLeave={(e) => onMouseLeaveHandler(e, cardImage)}
              className="card-img-top img-fluid rounded-circle w-90"
              src={
                currentId === (index+1) && mouseHover === true
                  ? cardImageBlanc
                  : cardImage
              }
              alt={alt}
            />
          </div>
          <div className="card-body" id={"b_"+(index+1)}
            onMouseOver={(e) => onMouseOverHandler(e, cardImageBlanc)}
            onMouseLeave={(e) => onMouseLeaveHandler(e, cardImage)}>
            <h5 className="card-title" id={"h_"+(index+1)}
            onMouseOver={(e) => onMouseOverHandler(e, cardImageBlanc)}
            onMouseLeave={(e) => onMouseLeaveHandler(e, cardImage)}
            >{cardTitle}</h5>
            <p className="card-text"  id={"p_"+(index+1)}
            onMouseOver={(e) => onMouseOverHandler(e, cardImageBlanc)}
            onMouseLeave={(e) => onMouseLeaveHandler(e, cardImage)}>{cardDescription}</p>
          </div>
        </div>
      </div>
    );
  });

  return card;
};

export default Card;
