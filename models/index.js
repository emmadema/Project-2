var mongoose = require("mongoose");
	mongoose.connect("mongodb://localhost/my-closet");

module.exports.Clothing = require('./clothing');
