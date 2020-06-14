/* eslint-disable */
const jwt = require('jsonwebtoken');

exports.authenticatingUser = async (req, res, next) => {
  let header;
  let token;

  if (!(header = req.header('Authorization')) || !(token = header.replace('Bearer ', '')))
    return res.status(401).send({ message: 'Access denied!' });

  try {
    let verified;
    verified = jwt.verify(token, process.env.TOKEN_KEY, function (err) {
      if (err) jwt.verify(token, process.env.TOKEN_KEY_ADMIN);
    });

    req.user = verified;
    return next();
  } catch (error) {
    return res.status(400).send({ message: 'Invalid token' });
  }
};
exports.authenticatingAdmin = (req, res, next) => {
  let header;
  let token;

  if (!(header = req.header('Authorization')) || !(token = header.replace('Bearer ', '')))
    return res.status(401).send({ message: 'Access denied!' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY_ADMIN);

    req.user = verified;
    return next();
  } catch (error) {
    return res.status(400).send({ message: 'Invalid token, you are not an admin' });
  }
};
