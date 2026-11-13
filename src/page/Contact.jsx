import React from 'react'
import "../Style/Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
     <div className='contact-hero'>
      <h1>Get In Touch</h1>
      <p>We are here to help - reach out</p>

     </div>
     <div className='contact-container'>
      <div className='contact-info'>
        <h2>Contact Detail</h2>
<div className='info-item'>
  <span className='info-icon'>📞</span>
  <div>
    <h4>Phone</h4>
    <p>+1 555 123 4567</p>
     </div>
    </div>
    <div className='info-item'>
      <span className='info-icon'>✉️</span>
      <div>
        <h4>Email</h4>
        <p>info@cityride.com</p>
      </div>
    </div>
  
   <div className='info-item'>
      <span className='info-icon'>📍</span>
      <div>
        <h4>Address</h4>
        <p>123 Main Street, Cityville, USA</p>
      </div>
    </div>
   <div className='info-item'>
      <span className='info-icon'>⏰</span>
      <div>
        <h4>Opening Hours</h4>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
      </div>
    </div>
   </div>
   <form className='contact-form' onSubmit={(e)=>{e.preventDefault(); alert("Message sent!");}}>
   
   <label> Name</label>
    <input type="text" placeholder='Your Name' />
    <label> Email</label>
    <input type="email" placeholder='You@example.com' />
    <label> Message</label>
    <textarea rows='5' placeholder='How can we help you?'></textarea>
    <button type='submit'>Send Message</button>
   </form>
    </div>
     </div>
    
  
  
  )
}

export default Contact;