const { transaction } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const trans = await transaction.create(req.body);
    // res.send({ data: trans });
    return next();
  } catch (error) {
    return console.log(error);
  }
};
