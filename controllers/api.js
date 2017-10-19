/*************
*Routes Pages*
**************/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require("passport");
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const key = require('../info');
const request = require('request');
const apiURL = ('http://api.shopstyle.com/api/v2/products?fts=' + req.params.keyword + '&pid='+key/*+'&offset=0&limit=1000'*/);

//console.log(key);
//console.log(apiURL);

//send data to page when akeyword is searched
app.get('/api/:keyword', function getSearch(req, res) {
    var searchKeyword = 'dress';
    request(apiURL, function(err, res, body) {
  	searchKeyword = json.parse(body);
  	res.send(searchKeyword);
  	console.log(apiURL);
  	});
});


module.exports = {
	getSearch: getSearch
};