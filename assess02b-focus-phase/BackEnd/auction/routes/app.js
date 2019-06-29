const router = require('express').Router();
const User = require('../models/users')
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local')
var Item = require('../models/item')

router.get('/', (req, res) => {
    // res.sendStatus(200);
    res.send('<h1>Routes running</h1>');
})

router.get('/register', (req, res)=> {
    res.sendFile(path.resolve('register.html'))
})

router.post('/register', (req, res) => {
    console.log(req.query)
    var user = new User()
    user.username = req.query.username,
    user.password = req.query.password,
    user.email = req.query.email

    req.checkQuery('username', 'username is required').notEmpty();
    req.checkQuery('password', 'password is required').notEmpty();
    req.checkQuery('email', 'email is required').notEmpty();
    req.checkQuery('email', 'email is invalid').isEmail();

    var errors = req.validationErrors();
    if (errors) {
        console.log(errors);
    } else {
        console.log('no errors')
    }

    User.createUser(user, function(err, user) {
        if (err) throw err;
        console.log(user);
    })
    res.send(`User ${user.username} registered. Login to continue`)
});

router.get('/login', (req, res) => {
    res.sendFile(path.resolve('login.html'))
})

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserbyUsername(username, function(err, user) {
            if(err) throw err;
            if(!user) {
                console.log('Unknown user');
                return done(null, false);
            } else {
                console.log('User match!')
            }
            
            User.comparePassword(password, user.password, function(err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    console.log('Password match!');
                    return done(null, user)
                } else {
                    console.log('Invalid Password')
                    return done (null, false)
                }
            })
        })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/logout', (req, res) => {
    console.log(req.user.username);
    req.logout();
    res.send('You are logged out');
})


module.exports = router;