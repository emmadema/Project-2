//add to internal mongo datbase
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ClothingSchema = new Schema ({
	typeOf: String,
	season: String,
	brand: String,
	color: String,
	image: []
});

var Clothing = mongoose.model('Clothing', ClothingSchema);
module.exports = Clothing;

