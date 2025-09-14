import React from 'react';


function ContactPage() {
  return (
    <div className="app-container">
  <div>
    <h1 className="Arrivals ">
        Contact Us
    </h1>
    <p className="icons">
  <span className="icon-item">
    <i className="fa-solid fa-location-pin fa-2x"></i>
    <small>Bashorun, Ibadan</small>
  </span>
  <span className="icon-item">
    <i className="fa-solid fa-envelope fa-2x"></i>
    <small> <a href="mailto:olamidejayde@gmail.com"> olamidejayde@gmail.com</a> </small>
  </span>
  <span className="icon-item">
    <i className="fa-solid fa-phone-volume fa-2x"></i>
    <small>Whatsapp:09085601050</small>
     <small>Complain/Enquiries:07080718756</small>
  </span>
</p>

  </div> 
 
  </div>
  );
}

export default ContactPage;
