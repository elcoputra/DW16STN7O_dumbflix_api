const { user } = require('../../models');
// const { encryptPass } = require ('../../api/middlwares/encryptor');

exports.create = async (req, res) => {
  try {
    const regis = await user.create(req.body);
    res.send({ data: regis });
  } catch (error) {
    console.log(error);
  }
};
