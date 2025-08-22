const mongoose = require("mongoose");
require("dotenv").config();

// Choose either local or cloud URL
// const mongoURL = process.env.DB_URL_LOCAL; 
const mongoURL = process.env.DB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("✅ Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});

module.exports = db;
