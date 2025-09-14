import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <hr className="thick-hr" />
      <div className="row">
        <div className="col-md-3">
          <p>
            We are a contemporary fashion brand that specialises entirely in serving
            our lovers with beautiful, neat yet affordable thrifted clothes, and more.
          </p>
          <span><i className="fa-solid fa-location-dot"></i> Bashorun, Ibadan</span>
          <span><i className="fa-solid fa-phone"></i> <a href="tel:+2347080718756">07080718756</a></span>
          <span><i className="fa-solid fa-envelope"></i> <a href="mailto:olamidejayde@gmail.com">olamidejayde@gmail.com</a></span>
          <span><i className="fa-solid fa-clock"></i> Mon-Sat / 9:00 AM - 5:00 PM</span>
        </div>

        <div className="col-md-3">
          <h4>INFORMATION</h4>
          <button onClick={() => navigate('/aboutPage')} className="footer-link">About Us</button>
          <button onClick={() => navigate('/contactPage')} className="footer-link">Contact Us</button>
          <button onClick={() => navigate('/return')} className="footer-link">Return Policy</button>
          <button onClick={() => navigate('/salesPage')} className="footer-link">New Arrivals</button>
        </div>

        <div className="col-md-3">
          <h4>OUR SERVICES</h4>
          <button onClick={() => navigate('/payments')} className="footer-link">Payments</button>
          <button onClick={() => navigate('/delivery')} className="footer-link">Delivery Information</button>
          <button onClick={() => navigate('/delivery')} className="footer-link">Terms And Conditions</button>
        </div>

        <div className="col-md-3">
          <h4>STAY CONNECTED</h4>
          <a href="https://www.instagram.com/jayde_finds" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="fa-brands fa-square-instagram"></i>
          </a> 
          <a href="https://www.tiktok.com/@jayde_finds" target="_blank" rel="noopener noreferrer" title="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://wa.me/c/2349085601050" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
        </div>
      </div>
      <hr />
      <p className="c-info">© 2025 Jayde_Finds. All Rights Reserved. Designed By: Jayde Tech</p>
    </footer>
  );
};

export default Footer;
