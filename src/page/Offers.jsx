import React from 'react'
import "../Style/Offers.css"
import{Link} from "react-router-dom"
const Offers = () => {
  const offers = [
    {
      image: "/Cars/image_1.jpeg",
      name: "Luxury Sedan",
      badge:"15% OFF",
      title: "Weekend Deal;",
      description: "Get 15% off on all rentals from Friday to Suturday. Perfect for a weekend getaway!",
      oldPrice: "$65",
      newPrice: "$55",
      per:"/ day"
    },
    {
      image: "/Cars/image_2.avif",
      name: "Compact SUV",
      badge:"7 For  6",
      title: "Weekly Rental",
      description: "Rent a car for 7 days and  pay for only 6. one day free on all wekly Reservationss.",
      oldPrice: "$385",
      newPrice: "$330",
      per:"/ week",
    },
    {
      image: "/Cars/image_3.avif",
      name:" Sports Coupe",
      badge:"10% OFF",
      title: "Early Reservations",
      description: "Reserve 30 days before your pickup date and save 10% on any car in our fleet.",
      oldPrice: "$45",
      newPrice: "$40",
      per:"/ day",
    },
    {
      image: "/Cars/image_4.avif",
      name:"City Hatchback",
      badge:"20% OFF",
      title: "Student Discount",
      description: "Students get 20% off any rental with a valid university ID. Drive more , pay less!",
      oldPrice: "$35",
      newPrice: "$28",
      per:"/ day",
      
    }, 
  ];
  return (
    <div>
      <div className="offers-banner">
        <p>Use code <span className="offers-code">DRIVE10</span> to get 10% off your first Reservations</p>
    </div>
    <div className="offers-grid">
      {offers.map((offer) => (
        <div className="offer-card" key={offer.title}>
          <div className="offer-img">
            <img src={offer.image} alt={offer.title} />
            <span className="offer-badge">{offer.badge}</span>
          </div>
          <div className="offer-body">
            <h3> {offer.name}</h3>
            <p className="offer-desc"> {offer.description} </p>
            <p>
              <span className="offer-old">{offer.oldPrice}</span>
              <span className="offer-new">{offer.newPrice}</span>
              <span className="offer-per">{offer.per}</span>
            </p>
            <p className="offer-valid">Valid until 31st December 2026</p>
            <Link to="/Reservations" className="offer-btn">Reserve Now</Link>
          </div>
        </div>

      ))}
    </div>
    <div className="offers-terms">
      <h2>offer Terms</h2>
      <ul>
        <li><span className="offer-check">✓</span> Only one offer can be applied per Reservations</li>
        <li><span className="offer-check">✓</span> all offers are subject to vihicle availability.</li>
        <li><span className="offer-check">✓</span> Valid ID(e.g. university card) may be required to claim certain discounts.</li>
   </ul>

    </div>
    </div>
  ) 

  
};

export default Offers;