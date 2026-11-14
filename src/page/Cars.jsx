import React from 'react'
import "../Style/Cars.css"

import Card from '../Component/Card'
const cars =[
  {id:1, name:"Luxury Sedan", price:65,transmission:"Automatic", seats:5 , image:"/Cars/image_1.jpeg"},
  {id:2, name:"Compact SUV", price:55,transmission:"Manual", seats:5 , image:"/Cars/image_2.avif"},
  {id:3, name:"Sports Coupe", price:95,transmission:"Automatic", seats:4 , image:"/Cars/image_3.avif"},
  {id:4, name:"City Hatchback", price:35,transmission:"Manual", seats:4, image:"/Cars/image_4.avif"},
{id:5, name:"Electric Compact", price:50,transmission:"Automatic", seats:5 , image:"/Cars/image_5.avif"},
{id:6, name:"Family Sedan", price:45,transmission:"Automatic", seats:5 , image:"/Cars/image_6.avif"},
]
function Cars(){
  return (
    <div className="cars-page">
      <div className="cars-header">
        <h1>Our Fleet</h1>
        
        <p>Six cars to choose from - find the one that fits your trip!</p>
      </div>
      <div className="cars-grid">
        {cars.map((car) => (
          <Card
            key={car.id}
            image={car.image}
            name={car.name}
            price={car.price}
            transmission={car.transmission}
            seats={car.seats}
          />
        ))}
      </div>
    </div>
  )
}
export default Cars;