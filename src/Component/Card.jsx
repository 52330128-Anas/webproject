import React from "react";
import "../Style/Card.css";

const Card = ({ image, name, price, transmission, seats }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h2 >{name}</h2>
      <p>{price}</p>
      <p>{transmission}</p>
      <p>{seats}</p>
      <button className="card-btn">View Details</button>
    </div>
  );
};

export default Card;
