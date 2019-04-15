const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(expressValidator());
app.use(session({
    secret: 'cats',
    saveUninitialized: true,
    resave: true
}))
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

mongoose.connect('', {
    useNewUrlParser : true,
    useCreateIndex: true
})

.then(() => console.log('connection established'))
.catch(err => console.log(err))

app.listen(PORT, function () {
    console.log('server is listening on ', $PORT)
})

app.use('/', Routes);
appp.use('/user', auctionRoutes)