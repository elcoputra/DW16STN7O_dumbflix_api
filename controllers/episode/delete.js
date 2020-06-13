const { episode } = require('../../models');
exports.delete = async (req, res) => {
    await episode.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      data: {
        id: req.params.id,
      },
    });
  };