const express = require("express");
const router = express.Router();

const { getSummary, getCategorySummary,getTrends, } = require("./summary.controller");


router.get("/", getSummary);
router.get("/category", getCategorySummary);
router.get("/trends", getTrends);


module.exports = router;