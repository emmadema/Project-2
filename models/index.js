const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-closet");
const Clothing = require('./clothing'); //require the clothing model

module.exports.Clothing = Clothing; //export the clothing model