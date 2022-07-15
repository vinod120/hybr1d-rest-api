const userServices = require("../services/userServices");
const { registerValidation, loginValidation } = require("../validation");

exports.createUser = async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const result = await userServices.createUser(req.body, res);
    if(result) res.json({ msg: "User registered successfully"});
  } catch (err) {
    res.status(406).send({ msg: err, err: true });
  }
};

exports.userLogin = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const token = await userServices.userLogin(req.body);
    res.json({ token });
  } catch (err) {
    res
      .status(406)
      .send({ msg: err, err: true });
  }
};

exports.getListOfSellers = async (req, res) => {
  try {
    const result = await userServices.getListOfSellers();
    res.json(result);
  } catch (err) {
    res.status(406).send({ msg: err.message, err: err });
  }
};