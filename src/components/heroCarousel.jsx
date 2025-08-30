import { useEffect } from "react";
import { Carousel } from "bootstrap";
import { useNavigate } from "react-router-dom";

function HeroCarousel() {
  const navigate = useNavigate();

  useEffect(() => {
    const carouselEl = document.querySelector("#carouselExampleIndicators");
    if (carouselEl) {
      new Carousel(carouselEl, {
        interval: 2000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src="/images/silk9.avif" className="d-block w-100" alt="Nightwear 1" />
          <div className="hero-text">
            <h2>ENJOY TRENDY NIGHTWEARS</h2>
            <p>WITH</p>
            <h2 className="h2-2">JAYDE_FINDS</h2>
            <button className="shop-btn" onClick={() => navigate("/salesPage")}>
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/silk8.avif" className="d-block w-100" alt="Nightwear 2" />
          <div className="hero-text">
            <h2>LUXURY NIGHTWEAR</h2>
            <p>Trendy, Stylish & Affordable</p>
            <button className="shop-btn" onClick={() => navigate("/salesPage")}>
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/silk6.avif" className="d-block w-100" alt="Nightwear 3" />
          <div className="hero-text">
            <h2>COMFORT & LUXURY</h2>
            <p>Affordable Collections Daily</p>
            <button className="shop-btn" onClick={() => navigate("/salesPage")}>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroCarousel;
