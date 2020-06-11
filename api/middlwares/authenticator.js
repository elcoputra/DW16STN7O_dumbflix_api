/* eslint-disable */
const jwt = require('jsonwebtoken');

exports.authenticatingUser = (req, res, next) => {
  let header;
  let token;

  if (
    !(header = req.header('Authorization')) ||
    !(token = header.replace('Bearer ', ''))
  )
    return res.status(401).send({ message: 'Access denied!' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = verified;
    return next();
  } catch (error) {
    return res.status(400).send({ message: 'Invalid token' });
  }
};
