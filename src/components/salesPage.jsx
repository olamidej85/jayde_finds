import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import productsData from "../data/productsData";

function SalesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q") || "";
  const selectedCategory = searchParams.get("category") || "all";

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPaginationNumbers = () => {
    let pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages - 1, totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <div className="app-container">
      <h1 className="Arrivals">NEW ARRIVALS</h1>

      {currentProducts.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No products found for "{searchQuery}" in{" "}
          {selectedCategory === "all" ? "all categories" : selectedCategory} category.
        </p>
      ) : (
        <div className="all-product row">
          {currentProducts.map((product) => (
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
      )}

      {totalPages > 1 && (
        <div className="pagination d-flex justify-content-center mt-4">
          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            PREV
          </button>

          {getPaginationNumbers().map((page, index) =>
            page === "..." ? (
              <span key={index} className="dots">
                ...
              </span>
            ) : (
              <button
                key={index}
                className={`page-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}

          <button
            className="page-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
}

export default SalesPage;
