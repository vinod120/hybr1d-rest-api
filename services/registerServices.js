const userDAO = require("../DAO/registerDAO");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  try {
    let { username, role } = req;
    const isUsernameExist = await userDAO.getUser(username, role);
    if (isUsernameExist?.length) throw "This username is already exists.";
    req.password = await bcrypt.hash(req.password, await bcrypt.genSalt(10));
    return await userDAO.saveUser(req);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
