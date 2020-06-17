const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const userdata = await user.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'password'],
      },
    });
    return res.send({ data: { users: userdata } });
  } catch (error) {
    return res.send({ error });
  }
};
