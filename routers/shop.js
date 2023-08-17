const express = require('express');
const path = require('path');

const shopController = require('../controllers/shop.js');

const router = express.Router();

router.get('/', shopController.getshopController); 

module.exports = router;