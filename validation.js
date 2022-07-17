const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).required(),
    role: Joi.string().required(),
    password: Joi.string().min(5).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(5).required(),
  });

  return schema.validate(data);
};

module.exports = { loginValidation, registerValidation };
