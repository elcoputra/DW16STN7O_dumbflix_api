const Joi = require('@hapi/joi');

exports.validatingRegister = async (req, res, next) => {
  try {
    const schema = Joi.object({
      fullName: Joi.string().min(2).required(),
      email: Joi.string().email().min(13).required(),
      password: Joi.string().min(8).max(16).required(),
      gender: Joi.allow().required(),
      phone: Joi.string().min(10).required(),
      address: Joi.allow().required(),
      subscribe: Joi.boolean().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingLogin = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().min(13).required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    return next();
  } catch (error) {
    return console.log(error);
  }
};
