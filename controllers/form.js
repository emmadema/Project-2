const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const key = require('../info');
const request = require('request');
const mongoose = require('mongoose');
const db = require('../models');
/****************
*Form Controllers*
****************/

function getForm (req, res) {
  res.render();
};

function getAll (req, res) {
  db.Clothing.find({}, function(err, clothing) {
      if (err) { return console.log("index error: " + err); }
      res.json(clothing);
  });
}


function getOne (req, res) {
  db.Clothing.findOne({_id: req.params.id }, function(err, clothing) {
    res.json(clothing);
	});
 }

function createOne (req, res) {
  	var newItem = new db.Clothing({
    nameOf: req.body.name,
    season: req.body.season,
    brand: req.body.brand,
    color: req.body.color
	});
  	db.Clothing.create(req.body, function(err, clothing){
      res.json(clothing);
  	});
}

function deleteOne (req, res) {
  console.log('clothing deleted', req.params);
  var clothingId = req.params.id;
  db.Clothing.findOneAndRemove({ _id: clothingId }, function (err, deletedClothing) {
    res.json(deletedClothing);
  });
}

//function updateOne (req, res){

//}

//export all controllers to be used in the routes
module.exports = {
  getForm: getForm,
	getAll: getAll,
	getOne: getOne,
	createOne: createOne,
	deleteOne: deleteOne
};