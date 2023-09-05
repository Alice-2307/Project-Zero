exports.getcontactController = (req,res, next) => {
    res.render('contactus', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        productCSS: true,
        activeAddProduct: true
      });
};

exports.postcontactController = (req,res, next) => {
    console.log(req.body);
    res.redirect('/success');
};