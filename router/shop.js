const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop.js');

router.get('/', shopController.getshopController); 

module.exports = router;
