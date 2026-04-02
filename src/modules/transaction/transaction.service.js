const Transaction = require("./transaction.model");

// Create transaction
const createTransaction = async (data) => {
  return await Transaction.create(data);
};

// Get all transactions
const getTransactions = async () => {
  return await Transaction.find().populate("createdBy", "name email");
};

module.exports = {
  createTransaction,
  getTransactions,
};