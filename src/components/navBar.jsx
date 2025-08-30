import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NavBar() {
const navigate = useNavigate(); 
  return (
       <div className="app-container">
      <div className="top-bar">
        <div className="logo">
          <img src="images/raw" alt="jaydefinds" />
        </div>

        <div className="contact-info">
          <p><strong>Support:</strong> 07080718756</p>
          <p><strong>Email:</strong> olamidejayde@gmail.com</p>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <button className="nav-link btn btn-link" onClick={() => navigate('/homePage')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/salesPage')}>Shop All Items</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/aboutPage')}>About Us</button>
           </li>
            <li className="nav-item">
               <button className="nav-link btn btn-link" onClick={() => navigate('/contactPage')}>Contact Us</button>
           </li>
          </ul>
        </div>

         <Link to="/cartPage" className="ms-auto d-flex align-items-center">
  <i className="fa-solid fa-cart-shopping fs-5"></i>
</Link>
      </nav>
      
    </div>
  );
}


export default NavBar