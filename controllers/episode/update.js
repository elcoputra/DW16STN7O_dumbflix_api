const { episode } = require('../../models');

exports.update = async (req, res) => {
  const report = await episode.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
  const updated = await episode.findOne({
    where: {
      id: req.params.id,
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
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  res.send({
    data: updated,
  });
};
