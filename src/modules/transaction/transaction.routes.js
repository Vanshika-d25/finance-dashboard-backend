const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/auth.middleware");
const authorize = require("../../middlewares/role.middleware");


const { validateCreateTransaction } = require("./transaction.validator");

const {
  createTransaction,
  getTransactions,
} = require("./transaction.controller");

// GET + POST /transactions (PROTECTED)
router
  .route("/")
  .get(protect, authorize("admin", "analyst", "viewer"), getTransactions)
  .post(protect, authorize("admin"), validateCreateTransaction, createTransaction);

module.exports = router;