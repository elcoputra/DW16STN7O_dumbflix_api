require('dotenv').config();

const jwt = require('jsonwebtoken');

exports.getToken = async (req, res) => {
  try {
    const { email } = req.body;
    const idUser = req.credentialUser.id;
    const token = jwt.sign({ id: idUser }, process.env.TOKEN_KEY);
    return res.send({
      data: {
        email,
        token,
      },
    });
  } catch (error) {
    return console.log(error);
  }
};
