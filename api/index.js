const express = require('express');

const router = express.Router();

const usersRoute = require('../controllers/user/users');
const deleteUserRoute = require('../controllers/user/delete');
const loginRoute = require('../controllers/user/login');
const rigisterRoute = require('../controllers/user/register');
const transactionsRoute = require('../controllers/transaction/transactions');
const {
  validatingRegister,
  validatingLogin,
} = require('./middlwares/validator');
const { encryptPass, decryptPass } = require('./middlwares/encryptor');
const { getToken } = require('./middlwares/token');
const { authenticatingUser } = require('./middlwares/authenticator');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBFLIX API' });
});

// Routing
// baca user
router.get('/users', authenticatingUser, usersRoute.reads);

// transaction
router.get('/transactions', transactionsRoute.reads);

// delete user
router.delete('/user/delete/:id', deleteUserRoute.deleteUser);

// login ( -> cek required value -> cek data user di database (sambil bawa datanya
// -> cocokan password tidak di encrypt dengan yang di encryt) )
router.post(
  '/login',
  validatingLogin,
  loginRoute.checkingDataUser,
  decryptPass,
  getToken,
);

// Register ( cek required value -> encrypt password - > masukan ke database )
router.post(
  '/register',
  validatingRegister,
  encryptPass,
  rigisterRoute.create,
  getToken,
);

module.exports = router;
