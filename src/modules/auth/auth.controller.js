const authService = require("./auth.service");

// Login controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const result = await authService.loginUser(email, password);

    res.status(200).json({
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

module.exports = {
  login,
};