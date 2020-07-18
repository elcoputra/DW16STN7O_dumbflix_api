const { movie } = require('../../models');
const { category } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const moviesData = await movie.findAll({
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
    return res.send({ message: 'Successfully retrieved all movies', data: moviesData });
  } catch (error) {
    return res.send({ error });
  }
};
