const Schema = require('mongoose').Schema;

var bidSchema = new Schema ({
    bidder: {
        id : Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        id: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    bid: Number
})

var Bid = module.exports = mongoose.model('Bid', bidSchema);