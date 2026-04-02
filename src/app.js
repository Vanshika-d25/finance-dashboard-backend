const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./modules/transaction/transaction.routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const userRoutes = require("./modules/users/user.routes");
app.use("/users", userRoutes);

app.use("/transactions", transactionRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = app;