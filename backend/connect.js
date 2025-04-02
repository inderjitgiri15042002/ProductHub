const mongoose = require("mongoose");

async function connectToDB(url) {
  mongoose
    .connect(url)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => {
      console.error("❌ MongoDB Connection Failed:", err);
      process.exit(1);
    });
}

module.exports = connectToDB;
