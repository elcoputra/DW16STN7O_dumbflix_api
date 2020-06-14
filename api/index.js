const express = require('express');

const router = express.Router();

// ## MIDLEWARE ## //
const {
  validatingRegister,
  validatingLogin,
  validatingDeleteUser,
  validatingAddTransaction,
  validatingUpdateTransaction,
  validatingDeleteTransaction,
  validatingAddCategory,
  validatingUpdateCategory,
  validatingDeleteCategory,
  validatingAddMovie,
  validatingUpdateMovie,
  validatingDeleteMovie,
  validatingAddEpisodes,
  validatingUpdateEpisode,
  validatingDeleteEpisode,
  validatingViewEpisode,
  validatingViewEpisodes,
} = require('./middlwares/validator');
const { encryptPass, decryptPass } = require('./middlwares/encryptor');
const { getToken } = require('./middlwares/token');
const { authenticatingUser, authenticatingAdmin } = require('./middlwares/authenticator');

// ## USER ## //
const usersRoute = require('../controllers/user/users');
const userRoute = require('../controllers/user/user');
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
  res.render('index', { title: 'DUMBFLIX 404 Page' });
});

// ### USER ### //
router.get('/users', authenticatingAdmin, usersRoute.reads);
router.get('/user/:id', authenticatingUser, userRoute.reads);
router.post('/login', validatingLogin, loginRoute.checkingDataUser, decryptPass, getToken);
router.post('/register', validatingRegister, encryptPass, rigisterRoute.create, getToken);
router.delete('/user/:id', authenticatingAdmin, validatingDeleteUser, deleteUserRoute.deleteUser);

// ### TRANSACTION ### //
router.get('/transactions', authenticatingAdmin, transactionsRoute.reads);
router.post('/transaction', authenticatingAdmin, validatingAddTransaction, addTransactionRoute.create);
router.patch('/transaction/:id', authenticatingAdmin, validatingUpdateTransaction, updateTransactionRoute.update);
router.delete('/transaction/:id', authenticatingAdmin, validatingDeleteTransaction, deleteTransactionRoute.deleteTransaction);

// ### Category ## //
router.get('/categories', authenticatingUser, categoiresRoute.reads);
router.post('/category', authenticatingAdmin, validatingAddCategory, addCategoryRoute.create);
router.patch('/category/:id', authenticatingAdmin, validatingUpdateCategory, updateCategoryRoute.update);
router.delete('/category/:id', authenticatingAdmin, validatingDeleteCategory, deleteCategoryRoute.deletecategory);

// ### Movie ### //
router.get('/movies', authenticatingUser, moviesRouter.reads);
router.get('/movie/:id', authenticatingUser, movieRouter.reads);
router.post('/movie', authenticatingAdmin, validatingAddMovie, addMovieRouter.create);
router.patch('/movie/:id', authenticatingAdmin, validatingUpdateMovie, updateMovieRouter.update);
router.delete('/movie/:id', authenticatingAdmin, validatingDeleteMovie, deleteMovieRouter.delete);

// ### EPISODE ### //
router.get('/movie/:movieId/episodes', authenticatingUser, validatingViewEpisodes, episodesRouter.reads);
router.get('/movie/:movieId/episode/:id', authenticatingUser, validatingViewEpisode, episodeRouter.reads);
router.post('/episode', authenticatingAdmin, validatingAddEpisodes, addEpisodeRouter.create);
router.patch('/episode/:id', authenticatingAdmin, validatingUpdateEpisode, updateEpisodeRouter.update);
router.delete('/episode/:id', authenticatingAdmin, validatingDeleteEpisode, deleteEpisodeRouter.delete);

module.exports = router;
