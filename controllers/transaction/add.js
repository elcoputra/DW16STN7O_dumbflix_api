const { transaction } = require('../../models');
const { user } = require('../../models');

exports.create = async (req, res, next) => {
  try {
    const trans = await transaction.create(req.body);
    const { id } = trans;
    const userdata = await transaction.findOne({
      where: { id: id },
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
    // res.send({ data: trans });
    return res.send({
      message: 'Transaction data successfully created',
      data: userdata,
    });
  } catch (error) {
    return res.send({error});
  }
};
