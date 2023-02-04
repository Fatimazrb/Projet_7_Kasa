import './card.scss';
import React from "react";

const Cards = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="name">{title}</h2>
    </div>
  );
};

export default Cards;
