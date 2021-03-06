const { movie } = require('../../models');
const { category } = require('../../models');

exports.update = async (req, res) => {
  try {
    const report = await movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
    const updated = await movie.findOne({
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
    return res.send({
      message: 'Movie successfully updated',
      data: updated,
    });
  } catch (error) {
    return res.send({ error });
  }
};
