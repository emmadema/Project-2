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

function getSearch(req, res, body){
	let keyword = req.body;
	console.log(keyword);
	let apiURL = ('http://api.shopstyle.com/api/v2/products?fts='+keyword+'&pid='+key);
	event.preventDefault();
	res.result(apiURL); 
	consle.log(apiURL);
}


module.exports = {
	getSearch: getSearch
};