const Transaction = require("./transaction.model");

// Create transaction
const createTransaction = async (data) => {
  return await Transaction.create(data);
};

// Get all transactions
const getTransactions = async (query) => {
  const { type, category } = query;

  let filter = {};

  if (type) {
    filter.type = type;
  }

  if (category) {
    filter.category = category;
  }

  return await Transaction.find(filter).populate("createdBy", "name email");
};

module.exports = {
  createTransaction,
  getTransactions,
};