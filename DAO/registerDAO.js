const Users = require("../models/register");

exports.getUser = async (username) => {
  try {
    return await Users.findOne({ username: username, role: role });
  } catch (err) {
    throw err;
  }
};

exports.saveUser = async (userData) => {
  try {
    const user = new Users(userData);
    return await user.save();
  } catch (err) {
    throw err;
  }
};
