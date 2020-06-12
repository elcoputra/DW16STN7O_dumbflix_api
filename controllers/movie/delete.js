const { movie } = require('../../models');
exports.delete = async (req, res) => {
    const report = await movie.destroy({
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