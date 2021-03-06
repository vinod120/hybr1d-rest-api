const Users = require("../models/register");

exports.getUserExists = async (username) => {
  try {
    return await Users.findOne({username: username})
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

exports.getListOfSellers = async () => {
  try {
    return await Users.find({role: "buyer"})
  } catch (err) {
    throw err;
  }
};
