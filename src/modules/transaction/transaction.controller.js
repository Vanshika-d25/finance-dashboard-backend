const transactionService = require("./transaction.service");
const { updateTransaction, deleteTransaction } = require("./transaction.controller");

// Create transaction
const createTransaction = async (req, res) => {
  try {
    const userId = req.user.id || req.user._id; 

    const data = {
      ...req.body,
      createdBy: userId,
    };

    const transaction = await transactionService.createTransaction(data);
    
    console.log("USER:", req.user);
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
//update transactions
const updateTransaction = async (req, res) => {
  try {
    const updated = await transactionService.updateTransaction(
      req.params.id,
      req.body
    );

    if (!updated) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      message: "Transaction updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//update transactions
const deleteTransaction = async (req, res) => {
  try {
    const deleted = await transactionService.deleteTransaction(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const result = await transactionService.getTransactions(req.query);

    res.status(200).json({
      message: "Transactions fetched successfully",
      ...result,
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