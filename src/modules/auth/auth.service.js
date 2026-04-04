const User = require("../users/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Login user
const loginUser = async (email, password) => {

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }


  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

 
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );


  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};


const seedUsers = async () => {
  try {
    const users = [
      {
        name: "Admin User",
        email: "admin@test.com",
        password: "123456",
        role: "admin",
      },
      {
        name: "Analyst User",
        email: "analyst@test.com",
        password: "123456",
        role: "analyst",
      },
      {
        name: "Viewer User",
        email: "viewer@test.com",
        password: "123456",
        role: "viewer",
      },
    ];

    for (let userData of users) {
      const existing = await User.findOne({ email: userData.email });

      if (!existing) {
        await User.create(userData);
        console.log(`${userData.role} created`);
      }
    }
  } catch (error) {
    console.log("Seeding error:", error.message);
  }
};
const registerUser = async (data) => {
  const existing = await User.findOne({ email: data.email });

  if (existing) {
    throw new Error("User already exists");
  }

  const user = await User.create(data);

  return user;
};

module.exports = {
  loginUser,
  registerUser,
};