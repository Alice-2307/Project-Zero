const express = require('express');
const path = require('path');
const rootdir = require('../util/path.js');

const router = express.Router();

router.get('/success', (req,res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'success.html' ))
});

module.exports = router;