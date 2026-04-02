const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Finance Dashboard API is running",
  });
});

module.exports = app;