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
  validatingViewEpisodesByCategory,
  validatingUpdateEpisode,
  validatingDeleteEpisode,
  validatingViewEpisode,
  validatingViewEpisodes,
} = require('./middlwares/validator');
const { encryptPass, decryptPass } = require('./middlwares/encryptor');
const { getToken } = require('./middlwares/token');
const { authenticatingUser, authenticatingById, authenticatingAdmin, decode } = require('./middlwares/authenticator');

// ## USER ## //

const seasoCheckRoute = require('../controllers/user/seasonCheck');
const usersRoute = require('../controllers/user/users');
const userRoute = require('../controllers/user/user');
const deleteUserRoute = require('../controllers/user/delete');
const loginRoute = require('../controllers/user/login');
const rigisterRoute = require('../controllers/user/register');

// ## TRANSACTION ## //
const transactionRoute = require('../controllers/transaction/transaction');
const transactionsRoute = require('../controllers/transaction/transactions');
const transactionsByUserRoute = require('../controllers/transaction/transactionsByUser');
const addTransactionRoute = require('../controllers/transaction/add');
const updateTransactionRoute = require('../controllers/transaction/update');
const deleteTransactionRoute = require('../controllers/transaction/delete');

// ## CATEGORY ## //
const categoiresRoute = require('../controllers/category/categories');
const addCategoryRoute = require('../controllers/category/add');
const updateCategoryRoute = require('../controllers/category/update');
const deleteCategoryRoute = require('../controllers/category/delete');

// ## MOVIE ## //
const moviesRouter = require('../controllers/movie/movies');
const movieRouter = require('../controllers/movie/movie');
const movieSearchRouter = require('../controllers/movie/searchMovies');
const moviesByCategory = require('../controllers/movie/movesByCategory');
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
router.get('/auth', decode, seasoCheckRoute.reads);
router.get('/users', usersRoute.reads); // authenticatingAdmin
router.get('/user/:id', userRoute.reads); //authenticatingById
router.post('/login', validatingLogin, loginRoute.checkingDataUser, decryptPass, getToken);
router.post('/register', validatingRegister, encryptPass, rigisterRoute.create, getToken);
router.delete('/user/:id', validatingDeleteUser, deleteUserRoute.deleteUser); //authenticatingAdmin

// ### TRANSACTION ### //
router.get('/transactions', transactionsRoute.reads); //authenticatingAdmin
router.get('/transaction/:id', transactionRoute.reads); //authenticatingAdmin
router.get('/user/:id/transactions', transactionsByUserRoute.reads); //authenticatingById
router.post('/transaction', validatingAddTransaction, addTransactionRoute.create); //authenticatingAdmin
router.patch('/transaction/:id', validatingUpdateTransaction, updateTransactionRoute.update); //authenticatingAdmin
router.delete('/transaction/:id', validatingDeleteTransaction, deleteTransactionRoute.deleteTransaction); //authenticatingAdmin

// ### Category ## //
router.get('/categories', categoiresRoute.reads); //authenticatingUser
router.post('/category', validatingAddCategory, addCategoryRoute.create); //authenticatingAdmin
router.patch('/category/:id', validatingUpdateCategory, updateCategoryRoute.update); //authenticatingAdmin
router.delete('/category/:id', validatingDeleteCategory, deleteCategoryRoute.deletecategory); //authenticatingAdmin

// ### Movie ### //
router.get('/movies', moviesRouter.reads);
router.get('/movies/search/:target', movieSearchRouter.search); //authenticatingUser
router.get('/category/:categoryId/movies', validatingViewEpisodesByCategory, moviesByCategory.reads);
router.get('/movie/:id', movieRouter.reads); //authenticatingUser
router.post('/movie', validatingAddMovie, addMovieRouter.create); //authenticatingAdmin
router.patch('/movie/:id', validatingUpdateMovie, updateMovieRouter.update); //authenticatingAdmin
router.delete('/movie/:id', validatingDeleteMovie, deleteMovieRouter.delete); //authenticatingAdmin

// ### EPISODE ### //
router.get('/movie/:movieId/episodes', validatingViewEpisodes, episodesRouter.reads); //authenticatingUser
router.get('/movie/:movieId/episode/:id', validatingViewEpisode, episodeRouter.reads); //authenticatingUser
router.post('/episode', validatingAddEpisodes, addEpisodeRouter.create); //authenticatingAdmin
router.patch('/episode/:id', validatingUpdateEpisode, updateEpisodeRouter.update); //authenticatingAdmin
router.delete('/episode/:id', validatingDeleteEpisode, deleteEpisodeRouter.delete); //authenticatingAdmin

module.exports = router;
