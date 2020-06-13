const Joi = require('@hapi/joi');
const { user, transaction, category, movie, episode } = require('../../models');

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
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const detectUser = await user.findOne({
      where: { id: id },
    });
    if (!detectUser)
      return res.status(400).send({
        message: 'ID User Not Exist',
      });

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
        status : 'failed',
        message: 'userId is user, but the user was not found in accordance with the userId given',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateTransaction = async (req, res, next) => {
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

exports.validatingUpdateCategory = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const id = req.params.id;
    const idCategory = await category.findOne({
      where: { id: id },
    });
    if (!idCategory)
      return res.status(400).send({
        message: 'Category Not exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const idCategory = await category.findOne({
      where: { id: id },
    });
    if (!idCategory)
      return res.status(400).send({
        message: 'Category Not exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingAddMovie = async (req, res, next) => {
  try {
    const { title } = req.body;
    const nameMovie = await movie.findOne({
      where: { title: title },
    });
    if (nameMovie)
      return res.status(400).send({
        message: 'Movie Title Already exist!',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateMovie = await movie.findOne({
      where: { id: id },
    });
    if (!updateMovie)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteMovie = await movie.findOne({
      where: { id: id },
    });
    if (!deleteMovie)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingAddEpisodes = async (req, res, next) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required(),
      thumbnailEpisode: Joi.string().allow(),
      linkEpisode: Joi.string().allow(),
      movieId: Joi.number().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingUpdateEpisode = async (req, res, next) => {
  try {
    const schema = Joi.object({
      movieId: Joi.number().required(),
      title: Joi.string().min(2).required(),
      linkEpisode: Joi.string().required(),
      thumbnailEpisode: Joi.string().required(),
    });
    const { error } = await schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    // validating episode id
    const { id } = req.params;
    const updateEpisode = await episode.findOne({
      where: { id: id },
    });
    if (!updateEpisode)
      return res.status(400).send({
        message: 'ID Episode Not Exist',
      });
    // validating movie id
    const { movieId } = req.body;
    const findMovie = await movie.findOne({
      where: { id: movieId },
    });
    if (!findMovie)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};

exports.validatingDeleteEpisode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteEpisode = await episode.findOne({
      where: { id: id },
    });
    if (!deleteEpisode)
      return res.status(400).send({
        message: 'ID Movie Not Exist',
      });

    return next();
  } catch (error) {
    return console.log(error);
  }
};
