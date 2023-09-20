const express = require('express');
const healthcheckController = require('../controllers/healthcheck.controller');

const router = express.Router();

router.route('/').get(healthcheckController.healthcheck);

module.exports = router;
