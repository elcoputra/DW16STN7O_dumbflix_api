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
    res.send({
      data: detail,
    });
  } catch (error) {
    return console.log(error);
  }
};
