const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/auth.middleware");
const { validateCreateTransaction } = require("./transaction.validator");

const {
  createTransaction,
  getTransactions,
} = require("./transaction.controller");

// GET + POST /transactions (PROTECTED)
router
  .route("/")
  .get(protect, getTransactions)
  .post(protect, validateCreateTransaction, createTransaction);

module.exports = router;