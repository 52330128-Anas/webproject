import React from "react";
import "../Style/Card.css";
import{Link} from "react-router-dom"
const Card = ({ image, name, price, transmission, seats }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h2 >{name}</h2>
      <p>{price}</p>
      <p>{transmission}</p>
      <p>{seats}</p>
      <Link to="/Reservation" className="card-btn">Reserve Now</Link>
    </div>
  );
};

export default Card;
