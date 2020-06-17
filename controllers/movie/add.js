const { movie } = require('../../models');
const { category } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const feedback = await movie.create(req.body);
    const { id } = feedback;
    const detail = await movie.findOne({
      where: {
        id: id,
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
    return res.send({
      message: 'Movie successfully added',
      data: { movie: detail },
    });
  } catch (error) {
    return res.send({ error });
  }
};
