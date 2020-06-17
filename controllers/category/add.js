const { category } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const addCategory = await category.create(req.body);
    return res.send({
      message: 'successfully added one category',
      data: { category: { id: addCategory.id, name: addCategory.name } },
    });
  } catch (error) {
    return res.send({ error });
  }
};
