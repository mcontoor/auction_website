const router = require('express').Router();
const User = require('../models/users')
var path = require('path');

router.get('/', (req, res) => {
    // res.sendStatus(200);
    res.send('<h1>Routes running</h1>');
})

router.get('/register', (req, res)=> {
    res.sendFile(path.resolve('register.html'))
})

router.post('/register', (req, res) => {
    var user = new User()
    user.username = req.body.username,
    user.password = req.body.password,
    user.email = req.body.email

    req.checkBody('username', 'username is required').notEmpty();
    req.checkBody('password', 'password is required').notEmpty();
    req.checkBody('email', 'email is invalid').notEmpty();
    req.checkBody('email', 'email is invalid').isEmail();

    var errors = req.validationErrors();
    if (errors) {
        console.log('errors');
    } else {
        console.log('no errors')
    }

    User.createUser(user, function(err, user) {
        if (err) throw err;
        console.log(user);
    })
    res.send(`User ${user} registered. Login to continue`)
});


module.exports = router;