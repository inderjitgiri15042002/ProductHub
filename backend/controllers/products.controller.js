const { Product } = require("../models/product.model");

async function handleGET(req, res) {
  const allProducts = await Product.find({});

  if (!allProducts) {
    return res.status(404).json({
      success: false,
      message: "No Product Found in DB",
    });
  }

  return res.json({ success: true, data: allProducts });
}

async function handlePOST(req, res) {
  console.log(req.body);
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  try {
    const newProduct = await Product.create({ name, price, image });

    return res.status(201).json({
      success: true,
      message: "✅ Product created successfully",
      data: newProduct, // Send created product back to client
    });
  } catch (error) {
    console.error("❌ Error Creating Product:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

async function handlePUT(req, res) {
  const { id } = req.params;

  const { name, price, image } = req.body;

  // Validate input
  if (!name && !price && !image) {
    return res.status(400).json({
      success: false,
      message: "Please provide at least one field to update",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      {
        new: true,
      }
    );
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

async function handleDELETE(req, res) {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    console.error("❌ Error deleting product:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = {
  handleGET,
  handlePOST,
  handlePUT,
  handleDELETE,
};
