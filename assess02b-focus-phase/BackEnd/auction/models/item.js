const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema ({
    owner: {
        type: Schema.Types.ObjectId,
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
    startingbid : Number,
    data: Buffer,
    contentType: String,
})

var Item = module.exports = mongoose.model('Item', itemSchema);