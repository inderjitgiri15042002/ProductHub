import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("click");


    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const data = await response.json();
      console.log("Product created:", data);

      // Reset form after successful submission
      setNewProduct({ name: "", price: "", image: "" });
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div
      className={
        darkMode ? "create-page dark-page" : "darkmode-createPage create-page"
      }
    >
      <h1>Create New Product</h1>

      <form
        className={darkMode ? "product-form" : "dark-product-form product-form"}
      >
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>Category</label>
          <input
            type="text"
            name="image"
            placeholder="Enter category"
            value={newProduct.image}
            onChange={(e) => {
              setNewProduct({ ...newProduct, image: e.target.value });
            }}
            required
          />
        </div>

        <button onClick={handleSubmit} type="submit">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
