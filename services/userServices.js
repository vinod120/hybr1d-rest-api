const userDAO = require("../DAO/userDAO");
const bcrypt = require("bcryptjs");

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
    let { username, password } = req;
    const user = await userDAO.getUserExists(username);
    if (!user || !user.length) throw "Invalid username";

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) throw "Invalid password";

    await user.comparePassword(password);
    return user.generateToken(user);
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
