var express = require('express'),
    nodemailer = require("nodemailer"),
    router = express.Router();

var emailController = require('../controllers/emailController')();

router.route('/')
    .post(emailController.post);

module.exports = router;