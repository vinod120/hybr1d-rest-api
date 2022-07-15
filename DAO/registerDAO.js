const Users = require("../models/register");
const users = require("../db");

exports.getUser = async (username, role) => {
  try {
    return await users.filter(
      (user) => user.username === username && user.role === role
    );
  } catch (err) {
    throw err;
  }
};

exports.saveUser = async (userData) => {
  try {
   return users.push(userData)
  } catch (err) {
    throw err;
  }
};
