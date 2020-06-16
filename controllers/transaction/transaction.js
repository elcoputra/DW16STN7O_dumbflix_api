const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const userdata = await transaction.findOne({
      where: req.params.id,
      include: user,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
      },
    });
    return res.send({ data: userdata });
  } catch (error) {
    return res.send({error});
  }
};
