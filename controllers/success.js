

exports.getsuccessController =  (req,res, next) => {
    res.render('success', {
        pageTitle: 'successful',
        path: '/success',
        productCSS: true,
        activeAddProduct: true
      });
};
