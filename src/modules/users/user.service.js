const User = require("./user.model");

// Create user
const createUser = async (data) => {
  return await User.create(data);
};

// Get all users
const getUsers = async () => {
  return await User.find();
};

// Update user
const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete user
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};