var passport = require("passport");

// GET /signup
//new user
function getSignup(request, response) {
	response.render('signup', {message : request.flash('signupMessage')});
}

// POST /signup
//save user
//create
function postSignup(request, response, next) {
	//we already made local signup in passport.js
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
//is that user in here
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
	response.render('closetPage');
}

//secreat page
function getaddClothing(req, res){
	res.render('addClothing', {searchResults: req.searchResults});
	console.log(req.result);
	//if req. query the got to api
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