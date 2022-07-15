const userDAO = require("../DAO/registerDAO");

exports.createUser = async (req) => {
  try {
    let { username } = req;
    const isUsernameExist = await userDAO.getUser(username);
    if (isUsernameExist) throw Error(`This username is already present.`);
    return await userDAO.saveUser(req);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
