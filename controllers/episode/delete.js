const { episode } = require('../../models');
exports.delete = async (req, res) => {
    await episode.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message : "Sucsess",
      data: {
        id: req.params.id,
      },
    });
  };