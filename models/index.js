const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my-closet");
const Clothing = require('./clothing');

module.exports.Clothing = Clothing;