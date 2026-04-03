const transactionService = require("./transaction.service");

// Create transaction
const createTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.createTransaction(req.body);

    res.status(201).json({
      message: "Transaction created successfully",
      data: transaction,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getTransactions(req.query);

    res.status(200).json({
      message: "Transactions fetched successfully",
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
};