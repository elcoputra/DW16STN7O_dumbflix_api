const { user } = require('../../models');

exports.checkingDataUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const User = await user.findOne({
      where: { email },
    });
    if (!User) return res.status(400).send({ message: 'Invalid Login' });
    req.passwordFromDatabase = User;
    return next();
  } catch (error) {
    return console.log(error);
  }
};
