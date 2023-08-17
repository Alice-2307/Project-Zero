const Product = require('../models/product')

exports.getproductController  = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    productCSS: true,
    activeAddProduct: true
  });
};
exports.postproductController = (req, res, next) => {
  const p = new Product(req.body.title);
  p.save();
  console.log(p);
  res.redirect('/');
};

