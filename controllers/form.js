const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const key = process.env.API_KEY || require('../info');
const request = require('request');
const mongoose = require('mongoose');
const db = require('../models'); //sets the database = to the models

/****************
*Form Controllers*
****************/

//gets only one clothing itme
function getOne (req, res) {
  db.Clothing.findOne({_id: req.params.id }, function(err, clothing) {
    var body = JSON.parse(clohting);
    res.send(body);
	});
 }

//creates a clothing item
//this one works with the form
function createOne (req, res) {
    //sets new item equal to the new database clothing
  	var newItem = new db.Clothing({
    //sets the parameters for each section
    nameOf: req.body.name,
    season: req.body.season,
    brand: req.body.brand,
    color: req.body.color
	});
    //creates the new clothing item and redirects the user to the cloest page to view all clothing
  	db.Clothing.create(req.body, function(err, clothing){
      res.redirect('/closetPage');
  	});
}

//deletes a clothing items
function deleteOne (req, res) {
  console.log('clothing deleted', req.params);
  //finds the clothing by name and deltes it
  var clothingName = req.params.name;
  db.Clothing.findOneAndRemove({ name: clothingName }, function (err, deletedClothing) {
    res.json("Clothing Deteted: " + deletedClothing); // sends a message the that clothing item was deleted
  });
}

function updateOne (req, res){

}

//export all controllers to be used in the routes
module.exports = {
//updateOne: updateOne,
	getOne: getOne,
	createOne: createOne,
	deleteOne: deleteOne
};