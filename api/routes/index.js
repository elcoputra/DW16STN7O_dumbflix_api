const express = require('express');

const router = express.Router();

const usersRoute = require('../../controllers/users/users');
const userRoute = require('../../controllers/users/user');
// const loginRoute = require('./usersData/login');
const registerRoute = require('../../controllers/users/register');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBFLIX API' });
});

// Routing
router.get('/users', usersRoute.reads);
router.get('/user/:id', userRoute.read);
// router.get('/login/:id', loginRoute.check);
router.post('/register', registerRoute.create);


module.exports = router;
