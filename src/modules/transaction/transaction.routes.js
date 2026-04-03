const express = require("express");
const router = express.Router();

const {
  createTransaction,
  getTransactions,
} = require("./transaction.controller");

// GET + POST /transactions
router
  .route("/")
  .get(getTransactions)
  .post(createTransaction);

module.exports = router;
