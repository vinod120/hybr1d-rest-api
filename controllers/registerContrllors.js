const userServices = require("../services/registerServices");
const { registerValidation } = require("../validation");

exports.createUser = async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const result = await userServices.createUser(req.body);
    res.json({ result, msg: "User registered successfully" });
  } catch (err) {
    res
      .status(406)
      .send({ msg: "Something went wrong...Please try again", err: err });
  }
};
