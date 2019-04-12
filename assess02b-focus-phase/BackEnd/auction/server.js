const express = require('express')
const mongoose = require('mongoose');
const Routes = require('./routes/app')
const bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport')
var cookieParser = require('cookie-parser')
var LocalStrategy = require('passport-local')
var User = require('./models/users')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({
    secret: 'cats',
    saveUninitialized: true,
    resave: true
}))
app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/auction', {
    useNewUrlParser : true,
    useCreateIndex: true
})
.then(() => console.log('database connected'))
.catch(err => console.log(err))
  
app.use('/', Routes)


app.listen(PORT, function() {
    console.log('server listening to port ', PORT)
})