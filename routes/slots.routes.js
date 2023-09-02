const express = require('express');
const SlotsController = require('../controller/slot.controller');
const router = express.Router();

//Post 
router.post('/book', SlotsController.book);
router.post('/pending', SlotsController.getPendingSessions);

module.exports = router