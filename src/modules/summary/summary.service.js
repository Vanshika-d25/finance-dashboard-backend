const Transaction = require("../transaction/transaction.model");

const getTrends = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: {
          year: { $year: "$date" },
          month: { $month: "$date" },
        },
        income: {
          $sum: {
            $cond: [{ $eq: ["$type", "income"] }, "$amount", 0],
          },
        },
        expense: {
          $sum: {
            $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0],
          },
        },
      },
    },
    {
      $sort: {
        "_id.year": 1,
        "_id.month": 1,
      },
    },
  ]);

  return result.map((item) => ({
    month: `${item._id.year}-${String(item._id.month).padStart(2, "0")}`,
    income: item.income,
    expense: item.expense,
  }));
};

const getSummary = async () => {
  const transactions = await Transaction.find();

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
    }
  });

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  };
};

const getCategorySummary = async () => {
  const result = await Transaction.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);

  return result.map((item) => ({
    category: item._id,
    total: item.total,
  }));
};

module.exports = {
  getSummary,
  getCategorySummary,
  getTrends,
};