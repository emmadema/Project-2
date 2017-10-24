/********************
*Contorllers for API*
********************/

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const key = require('../info');
const request = require('request');

function getSearch(req, res, next){
	let keyword  = req.query.search; //the key work is the search query params
	console.log("getSearch ran");
	console.log(keyword);
	if (keyword) { //if there is a keyword run this
		let apiUrl = 'http://api.shopstyle.com/api/v2/products?fts=' + keyword + '&pid=' + key + '&offset=0&limit=10';
		//api url includes the key word and the API key
		//it alos limits the search results to the first 10
		request (apiUrl, function(err, response, body) {
			req.searchResults = body;
			//makes the search results equal to the body
			body = JSON.parse(body);
			//parses the body to JSON
			var productArray = [];
			//creates an emoy array to add the products
			for(i=0; i<body.products.length; i++) {		
			//runs through a for loop to add all products into the empy array	
				let apiData = body.products[i].image.sizes.Medium.url;
				//creates a var called api data to pull only the images out of the API
				productArray.push(apiData);//pushes the api data into the product array each time the for loop runs
				console.log('__________________________________');
				console.log(apiData);
				console.log('__________________________________');	
			}	
			res.json(productArray); //sends the product array to the front end
		});
	}

	
}

//exports the get search to be uses in routes
module.exports = {
	getSearch: getSearch
};