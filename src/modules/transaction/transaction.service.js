const Transaction = require("./transaction.model");

// Create transaction
const createTransaction = async (data) => {
  return await Transaction.create(data);
};

//update
const updateTransaction = async (id, data) => {
  return await Transaction.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

//Delete transactions
const deleteTransaction = async (id) => {
  return await Transaction.findByIdAndDelete(id);
};

// Get all transactions
const getTransactions = async (query) => {
  const { type, category, page = 1, limit = 5, startDate, endDate } = query;

  let filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
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