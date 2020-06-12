const { category } = require('../../models');
exports.deletecategory = async (req, res) => {
    const report = await category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
    res.send({
      data: {
        id: req.params.id,
      },
    });
  };