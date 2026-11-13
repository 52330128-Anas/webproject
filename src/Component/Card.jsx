import React from "react";


const Card = ({ image, name, price, transmission, seats }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <p>{transmission}</p>
      <p>{seats}</p>
    </div>
  );
};

export default Card;
