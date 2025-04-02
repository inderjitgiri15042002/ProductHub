const express = require("express");

const {
  handleGET,
  handlePOST,
  handlePUT,
  handleDELETE,
} = require("../controllers/products.controller");

const router = express.Router();

// GET: All the Product
router.get("/", handleGET);

// POST: Create a Product
router.post("/", handlePOST);

// PUT : Update a Product
router.put("/:id", handlePUT);

// Delete: delete a Product
router.delete("/:id", handleDELETE);

module.exports = router;
