const { transaction } = require('../../models');

exports.update = async (req, res) => {
  const report = await transaction.update(req.body, {
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
