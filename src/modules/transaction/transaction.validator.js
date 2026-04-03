const mongoose = require("mongoose");

const validateCreateTransaction = (req, res, next) => {
  const { amount, type, category, createdBy, date } = req.body;

  // Amount validation
  if (!amount || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({
      message: "Amount must be a positive number",
    });
  }

  // Type validation
  const validTypes = ["income", "expense"];
  if (!type || !validTypes.includes(type)) {
    return res.status(400).json({
      message: "Type must be 'income' or 'expense'",
    });
  }

  // Category validation
  if (!category || typeof category !== "string") {
    return res.status(400).json({
      message: "Category is required",
    });
  }

  // createdBy validation
  if (!createdBy || !mongoose.Types.ObjectId.isValid(createdBy)) {
    return res.status(400).json({
      message: "Invalid user ID",
    });
  }

  // Date validation (optional)
  if (date && isNaN(Date.parse(date))) {
    return res.status(400).json({
      message: "Invalid date format",
    });
  }

  next();
};

module.exports = {
  validateCreateTransaction,
};