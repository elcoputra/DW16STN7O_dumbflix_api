const express = require('express');

const router = express.Router();

const usersRoute = require('../controllers/user/users');
const deleteUserRoute = require('../controllers/user/delete');
const loginRoute = require('../controllers/user/login');
const rigisterRoute = require('../controllers/user/register');
const transactionsRoute = require('../controllers/transaction/transactions');
const transactionRoute = require('../controllers/transaction/transaction');
const addTransactionRoute = require('../controllers/transaction/add');
const updateTransactionRoute = require('../controllers/transaction/update');
const deleteTransactionRoute = require('../controllers/transaction/delete')
const {
  validatingRegister,
  validatingLogin,
  validatingAddTransaction,
} = require('./middlwares/validator');
const { encryptPass, decryptPass } = require('./middlwares/encryptor');
const { getToken } = require('./middlwares/token');
const { authenticatingUser } = require('./middlwares/authenticator');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBFLIX API' });
});

// Routing

// ### USER ### //
// baca user
router.get('/users', authenticatingUser, usersRoute.reads);
// delete user
router.delete('/user/delete/:id', deleteUserRoute.deleteUser);
// login ( -> cek required value -> cek data user di database (sambil bawa datanya
// -> cocokan password tidak di encrypt dengan yang di encryt) )
router.post('/login', validatingLogin, loginRoute.checkingDataUser, decryptPass, getToken);
// Register ( cek required value -> encrypt password - > masukan ke database )
router.post('/register', validatingRegister, encryptPass, rigisterRoute.create, getToken);

// ### TRANSACTION ### //
// transactions
router.get('/transactions', transactionsRoute.reads);
// transaction create
router.post(
  '/transaction/add',
  validatingAddTransaction,
  authenticatingUser,
  addTransactionRoute.create,
  transactionRoute.reads,
);
// transaction update
router.patch('/transaction/update/:id', authenticatingUser, updateTransactionRoute.update);
// delete transaction
router.delete('/transaction/delete/:id' , authenticatingUser, deleteTransactionRoute.deleteTransaction);

module.exports = router;
