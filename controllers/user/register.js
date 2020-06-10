const { user } = require('../../models');

exports.create = async (req, res) => {
  try {
    const regis = await user.create(req.body);
    res.send({ data: regis });
  } catch (error) {
    console.log(error);
  }
};
