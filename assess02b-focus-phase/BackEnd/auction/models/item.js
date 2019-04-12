const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema ({
    owner: {
        type: mongoose.Schema.ObjectID,
        ref: 'User',
        required: true
    },

    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    data: {
        type: Buffer,
        contentType: String
    }
})

var Item = module.exports = mongoose.model('Item', itemSchema);