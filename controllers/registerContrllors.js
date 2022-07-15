const userServices = require("../services/registerServices");

exports.createUser = async (req, res) => {
  try {
    const result = await userServices.createUser(req.body);
    res.json({ result, msg: "User registered successfully" });
  } catch (err) {
    res
      .status(406)
      .send({ msg: "Something went wrong...Please try again", err: err });
  }
};
