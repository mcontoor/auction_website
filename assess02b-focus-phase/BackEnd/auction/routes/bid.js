
var Auction = require('../models/Auction');

var currentAuction = null;

module.exports = function (io, socket) {
    socket.broadcast.emit('user:joined', {
        username: socket.username
    })

    socket.emit('auction:init', {
        auction: currentAuction
    })

    socket.on('auction:new', function (data,callback) {
        if(!currentAuction) {
            var auctionData = data.auction;
            currentAuction = new Auction(auctionData.seller, auctionData.item, 
                auctionData.quantity, auctionData.minimumBid);
            
                
                io.sockets.emit('auction:start', {
                    message: 'A new Auction will start soon.',
                    auction: currentAuction
                });
                countdown(onAuctionEnd);    
        }
        else {
            callback('Your auction will not start. There is a current auction.');
        }
    })

}
