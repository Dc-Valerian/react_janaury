import React from "react";
import "./CardProp.css";

const CardProps = ({ cardImage, h3, p }) => {
  return (
    <div className="card-props">
      <img src={cardImage} alt="francesImage" className="card-image" />
      <h3>{h3}</h3>
      <p>{p}</p>
      <button>ReadMore</button>
    </div>
  );
};

export default CardProps;
