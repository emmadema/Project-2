/********************
 * ROUTES  Passport*
 ********************/
const express = require('express'); //requires express
const router = express.Router(); //requires routers
const bodyParser = require('body-parser'); //required body parser
const methodOverride = require('method-override'); //requires
const passport = require("passport"); //required login functionality
const usersController = require('../controllers/users'); //requires the internal users controller
const staticsController = require('../controllers/statics'); //requires the internal static controller
const apiController = require('../controllers/api'); //requires the internal API controller
const formController = require('../controllers/form'); //requires the internal form controller

function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();
    // Otherwise the request is always redirected to the home page
    res.redirect('/');
}

router.route('/') //route to redirect to the home page
  .get(staticsController.home);

router.route('/signup') //redirets to signup form
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login') //redirects to login form
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route('/logout') //redirects to logout form
  .get(usersController.getLogout);

router.route('/addClothing') //loads data from add clothing page
  .get(authenticatedUser, usersController.getaddClothing)
  .post(formController.createOne) //posts the new created clothing from the form
  .delete(formController.deleteOne); //deletes one of the itmes of clothing

router.route('/getSearch') //loads data from get search page
  .get(apiController.getSearch);

router.route('/getaddClothing')
  .get(formController.getOne);//gets one item of clothing


router.route('/closetPage') //loads data from the closet page
	.get(authenticatedUser, usersController.getclosetPage);
 

//export all the routes
module.exports = router;