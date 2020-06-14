const { category } = require('../../models');
const { movie } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const movies = await movie.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: category,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'categoryId'],
      },
    });
    return res.send({ data: movies });
  } catch (error) {
    return res.send({ error });
  }
};
