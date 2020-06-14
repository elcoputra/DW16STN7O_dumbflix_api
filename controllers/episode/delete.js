const { episode } = require('../../models');
const { movie } = require('../../models');
exports.delete = async (req, res) => {
  try {
    const deleted = await episode.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.send({
      message: 'Episode with id: ' + req.params.id + ' deleted',
    });
  } catch (error) {
    return res.send({error});
  }
};
