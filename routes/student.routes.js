const express = require('express');
const StudentController = require('../controller/student.controller');
const router = express.Router();

router.post('/login',StudentController.enter);

router.post('/register',StudentController.register)

module.exports = router