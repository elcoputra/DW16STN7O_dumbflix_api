const Joi = require('@hapi/joi');

exports.validatingRegister = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(2).required(),
    email: Joi.string().email().min(13).required(),
    password: Joi.string().min(8).max(16).required(),
    gender: Joi.allow().required(),
    phone: Joi.string().min(10).required(),
    address: Joi.allow().required(),
    subscribe: Joi.boolean().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  return next();
};
