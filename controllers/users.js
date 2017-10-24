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
		successRedirect: '/closetPage',//if the username and password match redirtect to the closet page
		failureRedirect: '/login', //if the username and password dont match redirect home
		failureFlash: true
	});
	return loginStrategy(request, response, next);
}

// GET /logout
function getLogout(request, response) {
	request.logout(); //logout
	response.redirect('/'); //redirect to the home page
}

//secret page
function getclosetPage(request, response){
  	db.Clothing.find({}, function(err, clothing) { //find all the clohting
      if (err) { return console.log("index error: " + err); }
      response.render('closetPage', {clothing: clothing}); //render all the clothing on the screen
  });
}

//secreat page
function getaddClothing(req, res){
	res.render('addClothing', {apiData: req.apiData}); //got ot the add clothing page when authenticated
	console.log(req.result);//add the clothing from the external api on to the page
}

//export all contorllers to be used in the routes
module.exports = {
	getLogin: getLogin,
	postLogin: postLogin ,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	getclosetPage: getclosetPage,
	getaddClothing: getaddClothing
};