const Product = require('../models/product')

exports.getshopController = (req,res, next) => {
  const products = Product.fetchAll()
  console.log(products);
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
};