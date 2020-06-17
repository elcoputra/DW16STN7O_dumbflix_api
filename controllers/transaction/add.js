const { transaction } = require('../../models');
const { user } = require('../../models');
const moment = require('moment');

exports.create = async (req, res, next) => {
  try {
    const dataBody = req.body;
    let startDate = new Date();
    let dueDate = moment(startDate);
    dueDate.add(1, 'months');
    const trans = await transaction.create({ startDate: startDate, dueDate: dueDate, ...dataBody });
    const { id } = trans;
    // logic update subscribe
    if (req.body.status) {
      if (req.body.status == 'Approved') {
        await user.update(
          { subscribe: true },
          {
            where: { id: req.body.userId },
          },
        );
      } else {
        await user.update(
          { subscribe: false },
          {
            where: { id: req.body.userId },
          },
        );
      }
    }

    // add transaction
    const userdata = await transaction.findOne({
      where: { id: id },
      include: [
        {
          model: user,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
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
      data: {transaction:userdata},
    });
  } catch (error) {
    return res.send({ error });
  }
};
