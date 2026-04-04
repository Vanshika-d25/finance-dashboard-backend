const User = require("../modules/users/user.model");

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

module.exports = seedUsers;