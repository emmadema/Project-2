/*************
*Routes Pages*
**************/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const key = require('../info');
const request = require('request');
//const apiURL = ('http://api.shopstyle.com/api/v2/products?fts=' + keyword + '&pid='+key/*+'&offset=0&limit=1000'*/);

//console.log(key);
//console.log(apiURL);

//send data to page when akeyword is searched

function getSearch(req, res, next){
	let keyword  = req.query.search;
	console.log("getSearch ran");
	console.log(keyword);
	if (keyword) {
		let apiUrl = 'http://api.shopstyle.com/api/v2/products?fts=' + keyword + '&pid=' + key + '&offset=0&limit=10';
		//console.log(apiUrl);
		request (apiUrl, function(err, response, body) {//check this
			//res.send(data);
			req.searchResults = body;
			body = JSON.parse(body);
			//console.log(body.products);
			var productArray = [];
			for(i=0; i<body.products.length; i++) {			
				let apiData = body.products[i].image.sizes.Medium;
				productArray.push(apiData);
				console.log('__________________________________');
				console.log(apiData);
				console.log('__________________________________');	
			}	
			res.render(productArray);
		});
	}

	
}


module.exports = {
	getSearch: getSearch
};