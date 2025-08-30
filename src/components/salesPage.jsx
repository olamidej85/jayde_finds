import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/productsData';

function SalesPage() {
  return (
    <div className="app-container">
          <h1 className="Arrivals ">
        NEW ARRIVALS
    </h1>
    <div className="all-product row">
      {productsData.map((product) => (
        <div className="col-6 col-sm-3 product" key={product.id}>
          <img src={product.image} alt={product.name} />
          <span className="name">{product.name}</span>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button className="options">View Options</button>
          </Link>
        </div>
      ))}
  </div>
    </div>
  );
}

export default SalesPage;
