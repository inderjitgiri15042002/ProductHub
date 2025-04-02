import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdatePage.css"

const UpdatePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  // Fetch the product details
  async function fetchProduct() {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);
      if (!response.ok) throw new Error("Failed to fetch product");
      const data = await response.json();
      setProduct(data.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  // Handle Update
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error("Failed to update product");

      alert("Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }

  return (
    <div className="update-page">
      <h1>Update Product</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Price ($)</label>
          <input
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdatePage;
