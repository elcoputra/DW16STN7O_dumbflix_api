const { movie } = require('../../models');
const { category } = require('../../models');
const { episode } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const feedback = await episode.create(req.body);
    const { id } = feedback;
    const detail = await episode.findOne({
      where: {
        Id: id,
      },
      include: [
        {
          model: movie,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'categoryId'],
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
        exclude: ['createdAt', 'updatedAt', 'movieId'],
      },
    });
    return res.send({
      message: 'Transaction data successfully created',
      data: { episode: detail },
    });
  } catch (error) {
    return res.send({ error });
  }
};
exports.bluk = async (req, res, next) => {
  try {
    const feedback = await episode.bulkCreate(req.body);
    return res.send({
      message: 'Episodes data successfully created',
      data: { episodes: feedback },
    });
  } catch (error) {
    return res.send({ error });
  }
};
