const express = require("express");
const router = express.Router();
const { validateCreateTransaction } = require("./transaction.validator");

const {
  createTransaction,
  getTransactions,
} = require("./transaction.controller");

// GET + POST /transactions
router
  .route("/")
  .get(getTransactions)
  .post(createTransaction);

router.post("/", validateCreateTransaction, createTransaction);

module.exports = router;
