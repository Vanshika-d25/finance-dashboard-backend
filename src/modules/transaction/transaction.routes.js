const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/auth.middleware");
const authorize = require("../../middlewares/role.middleware");

const {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
} = require("./transaction.controller");

// GET + POST
router
  .route("/")
  .get(protect, authorize("admin", "analyst", "viewer"), getTransactions)
  .post(protect, authorize("admin"), createTransaction);

// UPDATE
router.patch("/:id", protect, authorize("admin"), updateTransaction);

// DELETE
router.delete("/:id", protect, authorize("admin"), deleteTransaction);

module.exports = router;