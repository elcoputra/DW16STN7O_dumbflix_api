const { transaction } = require('../../models');
exports.deleteTransaction = async (req, res) => {
    const report = await transaction.destroy({
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