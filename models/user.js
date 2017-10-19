//add to internal mongo datbase
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    name: String,
    email : String,
    password : String
  }
});


User.methods.encrypt = function(password) {
	//hashing tha password and salting it 8 times
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);