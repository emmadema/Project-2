 var db = require('./models/clothing');

 var clothingList = {
 	nameOf: "Jean Jacket",
	season: "All",
	brand: "Gap",
	color: "Dark Blue",
	image: []
 };

db.Clothing.remove({}, function(err, clothing) {
   console.log('removed clothing');
  db.Clothing.create(clothing_list, function(err, clothing) {
  		if (err) {
  			return console.log('error', err);	
  		} 
  		console.log("all clothes", clothes);
  		console.log("created", clothing.lenght, "clothing items");
  		process.exit();
	});
});




