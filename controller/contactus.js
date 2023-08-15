const path = require('path');

const rootdir = require('../util/path.js');

exports.getcontactController = (req,res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'contactUs.html'));
};

exports.postcontactController = (req,res, next) => {
    console.log(req.body);
    res.redirect('/success');
};