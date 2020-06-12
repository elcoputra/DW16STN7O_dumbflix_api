const Joi = require('@hapi/joi');
const { user } = require('../../models');

exports.validatingRegister = async (req, res, next) => {
  try {
    const schema = Joi.object({
      fullName: Joi.string().min(2).required(),
      email: Joi.string().email().min(13).required(),
      password: Joi.string().min(8).max(16).required(),
      gender: Joi.string().required(),
      phone: Joi.string().min(10).required(),
      address: Joi.string().required(),
      subscribe: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    // if email exist
    const { email } = req.body;
    const User = await user.findOne({
      where: { email },
    });
    if (User) return res.status(400).send({ message: 'Email Exist!' });


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
