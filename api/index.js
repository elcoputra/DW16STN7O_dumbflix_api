const express = require('express');

const router = express.Router();

const usersRoute = require('../controllers/user/users');
const userRoute = require('../controllers/user/user');
// const loginRoute = require('./usersData/login');
const rigisterRoute = require('../controllers/user/register');
const { validatingRegister } = require('./middlwares/validator');
const { encryptPass } = require('./middlwares/encryptor');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBFLIX API' });
});

// Routing
router.get('/users', usersRoute.reads);
router.get('/user/:id', userRoute.read);
// router.get('/login/:id', loginRoute.check);
router.post('/register', validatingRegister, encryptPass, rigisterRoute.create);


module.exports = router;
