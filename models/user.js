//adds a user
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs'); //requres tbcrypt

//creates a scema based off of the signUp form
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
	//encrypts the password an salts it 8 times
};

User.methods.validPassword = function(password) {
	//validates the password and comapres it the the salted word
	return bcrypt.compareSync(password, this.local.password);
};

//exports the user model
module.exports = mongoose.model('User', User);