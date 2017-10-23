const mongoose = require("mongoose");
const Clothing = require('./clothing');
mongoose.connect("mongodb://localhost/my-closet",function(err,database){
  error = err;
  db = database;
});



module.exports.Clothing = Clothing;

