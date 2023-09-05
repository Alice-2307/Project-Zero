const path = require('path');

const rootdir = require('../util/path.js');

exports.getproductController =  (req,res, next) => {

    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
};

exports.postproductController = (req,res, next) => {
    
    console.log(req.body);
    res.redirect('/');
};