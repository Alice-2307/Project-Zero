const express = require('express');

const router = express.Router();

const successController = require('../controllers/success.js');

router.get('/success', successController.getsuccessController);

module.exports = router;