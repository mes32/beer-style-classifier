const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('in get');
    res.sendStatus(200);
});

module.exports = router;