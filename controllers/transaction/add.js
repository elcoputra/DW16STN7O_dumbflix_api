const { transaction } = require('../../models');
const { user } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const trans = await transaction.create(req.body);
    const { id } = trans;
    const userdata = await transaction.findOne({
      where: { id: id },
      include: user,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
    });
    // res.send({ data: trans });
    res.send({ data: userdata });
  } catch (error) {
    return console.log(error);
  }
};
