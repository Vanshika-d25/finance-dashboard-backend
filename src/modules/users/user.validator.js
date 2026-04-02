const validateCreateUser = (req, res, next) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const validRoles = ["admin", "analyst", "viewer"];

  if (role && !validRoles.includes(role)) {
    return res.status(400).json({
      message: "Invalid role",
    });
  }

  next();
};

module.exports = {
  validateCreateUser,
};