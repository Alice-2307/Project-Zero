const express = require('express');
const path = require('path');

const router = express.Router();

const productController = require('../controllers/product.js');

router.get('/add-product',productController.getproductController);

router.post('/add-product',productController.postproductController);

module.exports = router;