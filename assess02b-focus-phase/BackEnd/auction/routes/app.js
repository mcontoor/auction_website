const router = require('express').Router();
const User = require('../models/users')
var path = require('path');

router.get('/', (req, res) => {
    // res.sendStatus(200);
    res.send('<h1>Routes running</h1>');
})

router.get('/register', (req, res)=> {
    res.sendFile(path.resolve('add-user.html'))
})

router.post('/register', (req, res) => {
    var user = new User()
    user.username = req.body.username,
    user.password = req.body.password,
    user.email = req.body.email

    user.save()
    .then(() => console.log('new user created'), res.send(`${user.username} registered. Login to continue`))
    .catch(err => console.log(err))
})

module.exports = router;