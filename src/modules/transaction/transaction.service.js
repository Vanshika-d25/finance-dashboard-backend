const Transaction = require("./transaction.model");

// Create transaction
const createTransaction = async (data) => {
  return await Transaction.create(data);
};

// Get all transactions
const getTransactions = async (query) => {
  const { type, category, page = 1, limit = 5 } = query;

  let filter = {};

  if (type) {
    filter.type = type;
  }

  if (category) {
    filter.category = category;
  }

  const skip = (page - 1) * limit;

  const transactions = await Transaction.find(filter)
    .skip(skip)
    .limit(Number(limit))
    .populate("createdBy", "name email");

  const total = await Transaction.countDocuments(filter);

  return {
    total,
    page: Number(page),
    limit: Number(limit),
    transactions,
  };
};

module.exports = {
  createTransaction,
  getTransactions,
};