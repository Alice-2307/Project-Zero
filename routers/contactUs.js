const express = require('express');

const contactusController = require('../controllers/contactus.js');

const router = express.Router();

router.get('/contactus', contactusController.getcontactController);

router.post('/contactus', contactusController.postcontactController); 

module.exports = router;