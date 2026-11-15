import React from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";
import "../Style/Home.css";

const Home = () => {
  const cardcars = [
    {
      image: "/Cars/image_1.jpeg",
      name: "Luxury sedan",
      price: "65$/day",
      transmission: "Automatic",
      seats: "5 seats",
    },

    {
      image: "/Cars/image_2.avif",
      name: "Compact SUV",
      price: "55$/day",
      transmission: "Manual",
      seats: "5 seats",
    },

    {
      image: "/Cars/image_3.avif",
      name: "Sports Coupen",
      price: "95$/day",
      transmission: "Automatic",
      seats: "4 seats",
    },
  ];
  return (
    <div>
      <div className="text">
        <h1>Find Your Perfect Rental Car</h1>
        <p>
          Affordable, reliable and clean cars for every journey — book online in
          under a minute.
        </p>
        <Link to="/Cars">Browse Cars</Link>
      </div>
      <div className="popular">Popular Car</div>
      <div className="cards">
        {cardcars.map((cars) => (
          <Card
            key={cars.name}
            image={cars.image}
            name={cars.name}
            price={cars.price}
            transmission={cars.transmission}
            seats={cars.seats}
          />
        ))}
      </div>
      <div>
        <h1>Why Choose Us</h1>
        <p>We make car rental simple and stress-free</p>
      </div>
      <div className="why">
        <div className="why-choose">
          <div>$</div>
          <h2>Fair Prices</h2>
          <p>Transparent rates with no hidden fees, guaranteed</p>
        </div>
        <div className="why-choose">
          <div>✦</div>
          <h2>Clean Cars</h2>
          <p>Every car is professionally cleaned and sanitised.</p>
        </div>
        <div className="why-choose">
          <div>⏲☎️</div>
          <h2>24/7 Support</h2>
          <p>Our team is available any time, day or night.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
