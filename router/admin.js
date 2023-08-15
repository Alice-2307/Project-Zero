const express = require('express');

const router = express.Router();

const productController = require('../controller/product.js');

router.get('/add-product',productController.getproductController);

router.post('/add-product',productController.postproductController);

module.exports = router;