require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const seedUsers=require("./config/seed");

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();
seedUsers();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});