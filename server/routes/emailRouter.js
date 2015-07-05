var express = require('express'),
    nodemailer = require("nodemailer"),
    ses = require('nodemailer-ses-transport'),
    router = express.Router();

var transporter = nodemailer.createTransport(ses({
    accessKeyId: 'AWSACCESSKEY',
    secretAccessKey: 'AWS/Secret/key'
}));

var emailController = require('../controllers/emailController')(transporter);

router.route('/')
    .post(emailController.post);

module.exports = router;