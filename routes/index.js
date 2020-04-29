var express = require('express');
var router = express.Router();
const photoModel = require('../models/Photo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json("Vintage Trip - API - © Jonathan Oreja  ");
});

router.get('/photos', function(req, res, next) {
	photoModel.find().then((users) => res.status(200).json(users)).catch(next);
});

router.get('/photos/:id', function(req, res, next) {
	photoModel.findById(req.params.id).then((photo) => res.status(200).json(photo)).catch(next);
});




module.exports = router;

