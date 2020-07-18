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
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (!moviee) return res.send({ message: 'Did not find the movie according to the id you provided' });
    return res.send({ message: 'Successfully took 1 move', data: moviee });
  } catch (error) {
    return res.send({ error });
  }
};
