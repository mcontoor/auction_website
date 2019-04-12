const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

var userSchema = new Schema ({
    username : {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(user, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                console.log('fguhjk', err)
            };
            user.password = hash;
            user.save(callback)
        })
    })
}