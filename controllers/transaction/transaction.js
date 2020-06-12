const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const { userId } = req.body;
    const userdata = await transaction.findOne({
      where: { userId },
      include: user,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
    });
    res.send({ data: userdata });
  } catch (error) {
    console.log(error);
  }
};
