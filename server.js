var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');//stores messages
var morgan = require('morgan');//generatrs logs on requests automatically
var cookieParser = require('cookie-parser');//alows you to add a secret string
var bodyParser = require("body-parser");
var session = require('express-session');
//var upload = multer({ dest: 'uploads/'});

mongoose.connect('mongodb://localhost/myCloset'); 

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

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

app.listen(3000);