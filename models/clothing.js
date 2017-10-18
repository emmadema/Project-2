var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ClothingSchema = new Schema ({
	typeOf: String,
	category: String,
	color: String,
	brand: String,
	season: String,
	image: []
});

var Clothing = mongoose.model('Clothing', ClothingSchema);
module.exports = Clothing;

