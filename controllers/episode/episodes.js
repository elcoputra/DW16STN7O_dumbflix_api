const { category } = require('../../models');
const { movie } = require('../../models');
const { episode } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const episodesData = await episode.findAll({
      where: {
        movieId: req.params.movieId,
      },
      include: [
        {
          model: movie,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
          include: [
            {
              model: category,
              attributes: {
                exclude: ['createdAt', 'updatedAt'],
              },
            },
          ],
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({ message: 'Successfully retrieved episodes', data: episodesData });
  } catch (error) {
    return res.send({ error });
  }
};
