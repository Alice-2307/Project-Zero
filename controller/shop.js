const path = require('path');

const rootdir = require('../util/path.js');

exports.getshopController = (req,res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
};