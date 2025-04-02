import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ darkMode, setDarkMode }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch Products from DB
  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:5000/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // 🗑 Delete Product
  async function handleDelete(productId) {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to delete product");

      // Remove the deleted product from state
      setProducts(products.filter((product) => product._id !== productId));
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  // ✏️ Navigate to Update Page
  function handleUpdate(productId) {
    navigate(`/update/${productId}`);
  }

  return (
    <div className="home-page">
      <h1 style={{ color: darkMode ? "white" : "black" }}>All Products</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="product-card"
              style={{ width: "400px" }}
            >
              <img src={product.image} alt="" style={{ objectFit: "cover" }} />
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>

              {/* Buttons */}
              <div className="button-group">
                <button
                  className="update-btn"
                  onClick={() => handleUpdate(product._id)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: darkMode ? "white" : "black" }}>
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
