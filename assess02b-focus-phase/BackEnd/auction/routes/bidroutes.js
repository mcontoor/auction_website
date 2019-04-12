const router = require('express').Router();
const multer = require('multer');
const faker = require('faker');
const Item = require('../models/item');
const fs = require('fs');

function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        res.send('Redirect to login route')
    }
}


router.get('/', ensureAuthenticated,(req, res) => {
    res.send('User Dashboard, user can choose to /bid route to bid, or /auction to place an item on bid');
})

router.get('/auction', ensureAuthenticated, (req,res) => {
    res.send('Upload item for auctions on /auction route')
})

router.post('/auction', ensureAuthenticated, (req, res) => {
    var item = new Item ()
    item.owner = req.user.id,
    item.title = req.query.title,
    item.description = req.query.description,
    item.startingbid = req.query.startingbid,
    item.data = faker.image.image()
    item.contentType = 'image'

    item.save()
    .then(() => console.log('item can now be displayed for auction'), res.send(`${item.title} can now be displayed for auction`))
    .catch(err => console.log(err));

});

router.get('/item', ensureAuthenticated, (req, res) => {
    Item.find({owner : req.user.id}, function(err, items) {
        var itemList = {};

        items.forEach(function(item) {
            itemList[item._id] = item;
        });
        console.log(itemList)
        res.send(itemList)
    })
})




module.exports = router;