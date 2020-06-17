const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const transactionData = await transaction.findOne({
      where: { id: req.params.id },
      include: user,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
      },
    });
    return res.send({ data: { transaction: transactionData } });
  } catch (error) {
    return res.send({ error });
  }
};
