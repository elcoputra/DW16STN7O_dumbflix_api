const { category } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const categories = await category.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({ data: categories });
  } catch (error) {
    return res.send({ error });
  }
};
