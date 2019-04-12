const router = require('express').Router();

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




module.exports = router;