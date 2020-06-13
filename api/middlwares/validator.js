const Joi = require('@hapi/joi');
const { user, transaction, category } = require('../../models');

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

exports.validatingAddTransaction = async (req, res, next) => {
  try {
    const schema = Joi.object({
      startDate: Joi.string().required(),
      dueDate: Joi.string().min(8).required(),
      userId: Joi.number().required(),
      attache: Joi.string().required(),
      status: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { userId } = req.body;
    const UserId = await transaction.findOne({
      where: { userId },
    });
    if (!UserId)
      return res.status(400).send({
        message: 'userId is user, but the user was not found in accordance with the userId given',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteTransaction = async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const ID = await transaction.findOne({
      where: { id },
    });
    if (!ID)
      return res.status(400).send({
        message: 'id transaction not found',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingAddCategory = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name } = req.body;
    const Name = await category.findOne({
      where: { name },
    });
    if (Name)
      return res.status(400).send({
        message: 'Category already exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};
