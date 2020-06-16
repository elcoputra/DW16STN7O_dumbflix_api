const { category } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const categories = await category.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId'],
          },
    });
    return res.send({ data:{categories : categories} });
  } catch (error) {
    return res.send({error});
  }
};
