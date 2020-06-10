const express = require('express');

const router = express.Router();
const usersRoute = require('./usersData/users');
const userRoute = require('./usersData/user');
// const loginRoute = require('./usersData/login');
const registerRoute = require('./usersData/register');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBFLIX API' });
});

router.get('/users', usersRoute.reads);
router.get('/user/:id', userRoute.read);
// router.get('/login/:id', loginRoute.check);
router.post('/register', registerRoute.create);


module.exports = router;
