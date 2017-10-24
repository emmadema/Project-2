const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my-closet");
const Clothing = require('./clothing'); //require the clothing model

module.exports.Clothing = Clothing; //export the clothing model