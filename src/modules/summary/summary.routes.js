const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/auth.middleware");
const authorize = require("../../middlewares/role.middleware");

const {
  getSummary,
  getCategorySummary,
  getTrends,
} = require("./summary.controller");

// 🔐 Protected summary routes
router.get("/", protect, authorize("admin", "analyst"), getSummary);

router.get("/category", protect, authorize("admin", "analyst"), getCategorySummary);

router.get("/trends", protect, authorize("admin", "analyst"), getTrends);

module.exports = router;