function Auction(seller, item, quantity, minimumBid) {
	this.seller = seller;
  this.item = item;
  this.quantity = quantity;
  this.minimumBid = minimumBid;
  
}
function Bid(player, bid) {
  this.player = player;
  this.bid = bid;
}