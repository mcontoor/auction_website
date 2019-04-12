const Schema = require('mongoose').Schema;

var bidSchema = new Schema ({
    bidder: {
        id : mongoose.Schema.ObjectID,
        ref: 'User',
        required: true
    },
    item: {
        id: mongoose.Schema.ObjectID,
        ref: 'Item',
        required: true
    },
    bid: Number
})

var Bid = module.exports = mongoose.model('Bid', bidSchema);