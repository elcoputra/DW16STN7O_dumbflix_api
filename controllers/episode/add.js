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
    res.send({
      data: detail,
    });
  } catch (error) {
    return console.log(error);
  }
};
