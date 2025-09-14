import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./cartContext";

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const { cartItems } = useContext(CartContext);

 
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

 const handleSearch = (e) => {
  e.preventDefault();
  navigate(`/salesPage?q=${searchQuery}&category=${category}`);
 closeMenu();
};

  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="logo">
          <img src="/images/raw" alt="jaydefinds" />
        </div>

        <div className="contact-info">
          <p>
            <strong>Support:</strong> 07080718756
          </p>
          <p>
            <strong>Email:</strong> olamidejayde@gmail.com
          </p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <span style={{ fontSize: "15px", fontWeight: "bold" }}>✖</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div 
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  navigate("/homePage");
                  closeMenu();
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  navigate("/salesPage");
                  closeMenu();
                }}
              >
                Shop All Items
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  navigate("/aboutPage");
                  closeMenu();
                }}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  navigate("/contactPage");
                  closeMenu();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <form className="search-container d-flex ms-3" onSubmit={handleSearch}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option value="all"> All Category</option>
            <option value="net">Net</option>
            <option value="silk">Silk</option>
            <option value="cotton">Cotton</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <Link
          to="/cartPage"
          className="ms-3 d-flex align-items-center position-relative"
        >
          <i className="fa-solid fa-cart-shopping fs-5"></i>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
