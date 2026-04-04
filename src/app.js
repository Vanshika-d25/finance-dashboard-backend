const express = require("express");
const cors = require("cors");
const transactionRoutes = require("./modules/transaction/transaction.routes");
const summaryRoutes = require("./modules/summary/summary.routes");
const authRoutes = require("./modules/auth/auth.routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
const userRoutes = require("./modules/users/user.routes");
app.use("/users", userRoutes);

app.use("/transactions", transactionRoutes);

app.use("/summary", summaryRoutes);
app.use("/auth", authRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

module.exports = app;