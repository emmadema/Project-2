//const mongoose = require("mongoose");
const db = require('./models');



 var clothingList = {
 	typeOf: "Jean Jacket",
	season: "All",
	brand: "Gap",
	color: "Dark Blue"
 };

db.Clothing.remove({}, function(err, clothing) {
   console.log('removed clothing');
  db.Clothing.create(clothingList, function(err, clothing) {
  		if (err) {
  			return console.log('error', err);	
  		} 
  		console.log("all clothes", clothing);
  		console.log("created", clothingList.length, "clothing items");
  		process.exit();
	});
});

//ejs.renderFile('./views/addClothing.ejs', clothing, function(err, str){html = str;});


