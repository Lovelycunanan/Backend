const express = require('express');
const router = express.Router();
const registrationController = require('../Controller/registrationController');

router.post('/', registrationController.calculateFee);
module.exports = router;