const userDAO = require("../DAO/userDAO");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (req) => {
  try {
    let { username } = req;
    const isUsernameExist = await userDAO.getUserExists(username);
    if (isUsernameExist) throw "This username is already exists.";
    req.password = await bcrypt.hash(req.password, await bcrypt.genSalt(10));
    return await userDAO.saveUser(req);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
exports.userLogin = async (req) => {
  try {
    var { username, password } = req;
    const user = await userDAO.getUserExists(username);
    if (!user) throw "Invalid username";

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) throw "Invalid password";
    token = jwt.sign({ user: user }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: 3600,
    });
    var { username, role, _id } = user;
    return { token, username, role, _id };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.getListOfSellers = async (req) => {
  try {
    return await userDAO.getListOfSellers(req);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
