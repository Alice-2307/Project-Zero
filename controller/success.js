const path = require('path');

const rootdir = require('../util/path.js');

exports.getsuccessController = (req,res, next) => {
    
    res.sendFile(path.join(rootdir, 'views', 'success.html' ))
};