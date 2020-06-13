const express = require('express');

const router = express.Router();

// ## MIDLEWARE ## //
const {
  validatingRegister,
  validatingLogin,
  validatingAddTransaction,
  validatingDeleteTransaction,
  validatingAddCategory,
} = require('./middlwares/validator');
const { encryptPass, decryptPass } = require('./middlwares/encryptor');
const { getToken } = require('./middlwares/token');
const { authenticatingUser } = require('./middlwares/authenticator');

// ## USER ## //
const usersRoute = require('../controllers/user/users');
const deleteUserRoute = require('../controllers/user/delete');
const loginRoute = require('../controllers/user/login');
const rigisterRoute = require('../controllers/user/register');

// ## TRANSACTION ## //
const transactionRoute = require('../controllers/transaction/transaction');
const transactionsRoute = require('../controllers/transaction/transactions');
const addTransactionRoute = require('../controllers/transaction/add');
const updateTransactionRoute = require('../controllers/transaction/update');
const deleteTransactionRoute = require('../controllers/transaction/delete');

// ## CATEGORY ## //
const categoiresRoute = require('../controllers/category/categories');
const addCategoryRoute = require('../controllers/category/add');
const updateCategoryRoute = require('../controllers/category/update');
const deleteCategoryRoute = require('../controllers/category/delete');

// ## MOVIE ## //
const movieRouter = require('../controllers/movie/movie');
const moviesRouter = require('../controllers/movie/movies');
const addMovieRouter = require('../controllers/movie/add');
const updateMovieRouter = require('../controllers/movie/update');
const deleteMovieRouter = require('../controllers/movie/delete');

// ## EPISODE ## //
const episodeRouter = require('../controllers/episode/episode');
const episodesRouter = require('../controllers/episode/episodes');
const addEpisodeRouter = require('../controllers/episode/add');
const updateEpisodeRouter = require('../controllers/episode/update');
const deleteEpisodeRouter = require('../controllers/episode/delete');

// ################################## Routing ################################## //

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBFLIX API' });
});

// ### USER ### //
router.get('/users', authenticatingUser, usersRoute.reads);
router.delete('/user/delete/:id', deleteUserRoute.deleteUser);
router.post('/login', validatingLogin, loginRoute.checkingDataUser, decryptPass, getToken);
router.post('/register', validatingRegister, encryptPass, rigisterRoute.create, getToken);

// ### TRANSACTION ### //
router.get('/transactions', transactionsRoute.reads);
router.post(
  '/transaction/add',
  validatingAddTransaction,
  authenticatingUser,
  addTransactionRoute.create,
  transactionRoute.reads,
);
router.patch('/transaction/update/:id', authenticatingUser, updateTransactionRoute.update);
router.delete(
  '/transaction/delete/:id',
  authenticatingUser,
  validatingDeleteTransaction, // validator ini belum di coba.
  deleteTransactionRoute.deleteTransaction,
);

// ### Category ## //
router.get('/categories', categoiresRoute.reads);
router.post('/category/add', authenticatingUser, validatingAddCategory, addCategoryRoute.create);
router.patch('/category/update/:id', authenticatingUser, updateCategoryRoute.update);
router.delete('/category/delete/:id', authenticatingUser, deleteCategoryRoute.deletecategory);

// ### Movie ### //
router.get('/movies', moviesRouter.reads);
router.get('/movie/:id', movieRouter.reads);
router.post('/movie/add', authenticatingUser, addMovieRouter.create);
router.patch('/movie/update/:id', authenticatingUser, updateMovieRouter.update);
router.delete('/movie/delete/:id', authenticatingUser, deleteMovieRouter.delete);

// ### EPISODE ### //
router.get('/episodes/:movieId', episodesRouter.reads);
router.get('/movie/:movieId/episode/:id', episodeRouter.reads);
router.post('/episode/add', addEpisodeRouter.create);
router.patch('/episode/update/:id', updateEpisodeRouter.update);
router.delete('/episode/delete/:id', deleteEpisodeRouter.delete);

module.exports = router;
