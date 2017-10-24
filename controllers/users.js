var passport = require("passport"); //requires the use of passport
const db = require('../models'); //sets the database to equal models

/*****************
Users Controllers
*****************/

// GET /signup
//new user
function getSignup(request, response) {
	//render the signup page for the new user to signup
	response.render('signup', {message : request.flash('signupMessage')});
}

// POST /signup
// new user
function postSignup(request, response, next) {
	let signupStrategy = passport.authenticate('local-signup',{
		successRedirect: '/addClothing',
		failureRedirect: '/signup',
		failureFlash: true
	});
	return signupStrategy(request,response, next);	
}

// GET /login
//login page
function getLogin(request, response) { 
	response.render('login', {message: request.flash('loginMessage')});
}

// POST /login 
function postLogin(request, response, next) {
	let loginStrategy = passport.authenticate('local-login',{
		successRedirect: '/closetPage',
		failureRedirect: '/login',
		failureFlash: true
	});
	return loginStrategy(request, response, next);
}

// GET /logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
}

//secret page
function getclosetPage(request, response){
  	db.Clothing.find({}, function(err, clothing) {
      if (err) { return console.log("index error: " + err); }
      response.render('closetPage', {clothing: clothing});
  });
}

//secreat page
function getaddClothing(req, res){
	res.render('addClothing', {apiData: req.apiData});
	console.log(req.result);
}


module.exports = {
	getLogin: getLogin,
	postLogin: postLogin ,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	getclosetPage: getclosetPage,
	getaddClothing: getaddClothing
};