import React from "react";
import "../Style/NavBar.css";
import {
   FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
  faCarRear

 } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <h2>
          <FontAwesomeIcon icon={faCarRear} />
          Car Rental{" "}
        </h2>
      </div>
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/Cars">Cars</Link>
        <Link to="/Offers">Offers</Link>
        <Link to="/Reservations">Reservations</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
