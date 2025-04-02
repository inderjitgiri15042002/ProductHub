const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product.route");
const connectToDB = require("./connect");
const { Product } = require("./models/product.model");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

connectToDB("mongodb://localhost:27017/crash-course");

app.use(express.json());

app.use("/api/products", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
