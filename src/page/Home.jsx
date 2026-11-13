import React from "react";
import { Link } from "react-router-dom";
import Card from "../Component/Card";

const Home = () => {
  const cardcars = [
    {
      image: "/Cars/image_1.jpeg",
      name: "Luxury sedan",
      price: "65$/day",
      transmission: "Automatic",
      seats: "5 seats",
    },
  ];
  return (
    <div>
      <div>
        <h1>Find Your Perfect Rental Car</h1>
        <p>Find Your Perfect Rental Car</p>
        <Link to="/Cars">Browse Cars</Link>
      </div>
      <div>
        {cardcars.map((cars) => (
          <Card key={cars.name}
            image={cars.image}
            name={cars.name}
            price={cars.price}
            transmission={cars.transmission}
            seats={cars.seats}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
