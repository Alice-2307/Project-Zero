const express = require('express');

const router = express.Router();

const contactusController = require('../controller/contactus.js');

router.get('/contactus', contactusController.getcontactController);

router.post('/contactus', contactusController.postcontactController); 

module.exports = router;
