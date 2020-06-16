const { transaction } = require('../../models');
const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const userdata = await transaction.findAll({
      include: [
        {
          model: user,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
    });
    return res.send({ data: {transactions : userdata} });
  } catch (error) {
    return res.send({error});
  }
};
