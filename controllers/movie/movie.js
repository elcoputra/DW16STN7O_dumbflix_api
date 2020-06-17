const { category } = require('../../models');
const { movie } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const moviee = await movie.findOne({
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
    if (!moviee) return res.send({ message: 'did not find the movie according to the id you provided' });
    return res.send({ data: { movie: moviee } });
  } catch (error) {
    return res.send({ error });
  }
};
