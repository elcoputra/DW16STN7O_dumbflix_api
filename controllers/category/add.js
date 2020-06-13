const { category } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const addCategory = await category.create(req.body);
    res.send({
      data: addCategory
    });
  } catch (error) {
    return console.log(error);
  }
};
