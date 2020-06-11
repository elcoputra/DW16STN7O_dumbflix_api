const { user } = require('../../models');
// const { encryptPass } = require ('../../api/middlwares/encryptor');

exports.create = async (req, res, next) => {
  try {
    await user.create(req.body);
    const { email } = req.body;
    const User = await user.findOne({
      where: { email },
    });
    if (!User) return res.status(400).send({ message: 'Invalid Registration' });
    req.credentialUser = User;
    return next();
  } catch (error) {
    return console.log(error);
  }
};
