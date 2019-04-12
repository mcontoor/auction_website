const router = require('express').Router();

router.get('/', (req, res) => {
    // res.sendStatus(200);
    res.send('<h1>Routes running</h1>');
})

module.exports = router;