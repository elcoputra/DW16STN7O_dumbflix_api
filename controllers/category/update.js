const { category } = require('../../models');

exports.update = async (req, res) => {
  try {
    
    const report = await category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
    const updated = await category.findOne({
      where: {
        id: req.params.id,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    return res.send({
      message: 'successfully updated one category',
      data: {category:updated},
    });
  } catch (error) {
    return res.send(error);
  }
};
