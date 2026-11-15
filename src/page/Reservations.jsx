import React from "react";
import { useState } from "react";
import "../Style/Reservations.css";

const Reservations = () => {
  const [pickupDate, setpickupDate] = useState("");
  const [returnDate, setreturnDate] = useState("");
  const pricePerDay = 65;
  const oneDay = 1000 * 60 * 60 * 24;

  let days = 0;
  if (pickupDate && returnDate) {
    days = (new Date(returnDate) - new Date(pickupDate)) / oneDay;
  }

  const total = days * pricePerDay;

  return (
    <div>
      <div className="head">
        <h1>Reserve Your Ride</h1>
        <p>Fill in your details and we will confirm your reservation</p>
      </div>
      <form className="Form">
        <label>Full Name</label>
        <input type="text" placeholder="Your Name" />
        <div >
          <label>Phone</label>
          <input type="tel" placeholder="+961 81 346 776" />
          <label>Email</label>
          <input type="email" placeholder="You@example.com" />

          <div className="date">
           <div className="pickup">
             <label >Pickup Date</label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setpickupDate(e.target.value)}
            />
           </div>

            <div className="pickup">
              <label>Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setreturnDate(e.target.value)}
            />
            </div>
          </div>
          <div className="total">
            <p>Total ({days} days)</p>
            <h2>${total}</h2>
          </div>
          <button type="submit" className="btn">
            Confirm Reservation
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservations;
