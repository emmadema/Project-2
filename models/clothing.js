//add to internal mongo datbase
var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

let ClothingSchema = new Schema ({
	typeOf: String,
	season: String,
	brand: String,
	color: String
});

var Clothing = mongoose.model('Clothing', ClothingSchema);

module.exports = Clothing;