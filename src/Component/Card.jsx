import React from "react";
import "../Style/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
faEarthAmericas,
faUserGroup
 } from '@fortawesome/free-solid-svg-icons';

import{Link} from "react-router-dom"
const Card = ({ image, name, price, transmission, seats }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <h2 >{name}</h2>
      <p className="price">{price}</p>
      <div className="info">
        <p>
        <FontAwesomeIcon icon={faEarthAmericas} />
        {transmission}</p>
      <p>
        <FontAwesomeIcon icon={faUserGroup} />
        {seats}</p>
      </div>
     
      
      <Link to="/Reservation" className="card-btn">Reserve Now</Link>
    </div>
  );
};

export default Card;
