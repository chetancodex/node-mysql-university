const express = require('express');
const DeanController = require('../controller/dean.controller');
const router = express.Router();

router.post('/login',DeanController.enter);

router.post('/register',DeanController.register)

module.exports = router