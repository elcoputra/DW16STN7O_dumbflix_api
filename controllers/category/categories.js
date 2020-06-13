const { category } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const categories = await category.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId'],
          },
    });
    res.send({ data: categories });
  } catch (error) {
    console.log(error);
  }
};
