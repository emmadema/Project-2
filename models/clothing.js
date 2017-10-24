//aadds a clothing item to the internal mongo database
var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

//create a clothing schema based off of the clothing form
let ClothingSchema = new Schema ({
	typeOf: String,
	season: String,
	brand: String,
	color: String
});

//set the clothing variable equal to the clohting schema 
var Clothing = mongoose.model('Clothing', ClothingSchema);

//export the clothing variable 
module.exports = Clothing;