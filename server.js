const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');//stores messages
const morgan = require('morgan');//generatrs logs on requests automatically
const cookieParser = require('cookie-parser');//alows you to add a secret string
const bodyParser = require("body-parser");
const session = require('express-session');
const multer = require('multer');//allows image files to be up[loaded to the datbase
const db = require('./models');
const ejs = require('ejs');
const expressValidator = require('express-validator');
//var shopStyle = require('shopstyle-sdk');

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/myCloset');

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());
 

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'link other pages here' })); 
//inialize passport
app.use(passport.initialize());
//sessions
app.use(passport.session()); 
//flash messgaes
app.use(flash()); 

//keep above routes
//require file config passport and pass in passport package
require('./config/passport')(passport);

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);

app.listen(process.env.PORT || 3000);