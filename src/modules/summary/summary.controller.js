const summaryService = require("./summary.service");


const getTrends = async (req, res) => {
  try {
    const result = await summaryService.getTrends();

    res.status(200).json({
      message: "Trends fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getSummary = async (req, res) => {
  try {
    const result = await summaryService.getSummary();

    res.status(200).json({
      message: "Summary fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCategorySummary = async (req, res) => {
  try {
    const result = await summaryService.getCategorySummary();

    res.status(200).json({
      message: "Category summary fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getSummary,
  getCategorySummary,
  getTrends,
};