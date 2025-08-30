import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroCarousel from './heroCarousel';

function HomePage() {
  const navigate = useNavigate(); 

  return (
       <div className="app-container">

      <div className="hero">
     <HeroCarousel />
      </div>

      <div className='HP-2'>
        <h1>Welcome to Jayde_Finds</h1>
        <h1>Enjoy Trendy Luxury Affordable New Collection Daily</h1>
        <button className='view-btn' onClick={() => navigate("/salesPage")}>VIEW All</button>
      </div>
    </div>
  );
}


export default HomePage