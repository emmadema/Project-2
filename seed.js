//be able to have each user add clothing to the data base
//start with an initial array of the users clothing
'use strict'
const key = require('./info');
const request = require('request');
const apiURL = ('http://api.shopstyle.com/api/v2/products?pid=' + key);

//console.log(key);
//console.log(apiURL);

function get(serchResults) {
	request(apiURL, function(error, res, products){
		console.log('http://api.shopstyle.com/api/v2/products?pid=uid6596-39966186-25');
	});
}



//let userclothing = [];

//	db.Clothing.create(userclothing, function(err, clothing){

//});



