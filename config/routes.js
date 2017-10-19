/********************
 * ROUTES  Passport*
 ********************/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require("passport");
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();


    // Otherwise the request is always redirected to the home page
    res.redirect('/');
}


router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route('/logout')
  .get(usersController.getLogout);

router.route('/addClothing')
  .get(authenticatedUser, usersController.getaddClothing);

router.route('/closetPage')
	.get(authenticatedUser, usersController.getclosetPage);


//router.route('/api/:keyword')



module.exports = router;