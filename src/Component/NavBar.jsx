import React from "react";
import "../Style/NavBar.css";

import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <h2>Car Rental </h2>
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
