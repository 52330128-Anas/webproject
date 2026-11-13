import "../Style/Footer.css";
import React from 'react'

const Footer = () => {
  return (
    
       <footer className="footer"> 
        <div className="footer-top">

        <div>
        <h3>CityRide Rentals</h3>
        <p>Affortdable and reliable car rentals for every journey. book online and drive away today.</p>
</div>
     
      <div>
        <h3>Contact</h3>
        <p>📞 +1 55 123 4567</p>
      </div>
      <div>
        <h3>Address</h3>
        <p>123 Main Street, Cityville, USA</p>

      </div>
      <div>
      <h3>  Opening Hours</h3>
      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
      </div>
      </div>
      
      <div className="footer-bottom">
        © 2026 CityRide Rentals. University frontend project.

    </div>
    
    </footer>
  
  
   
  )
}

export default Footer;



