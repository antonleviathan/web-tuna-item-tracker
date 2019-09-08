var bcrypt = require('bcryptjs');
const UserModel = require('../models/User');

module.exports.create = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getByUsername = function(username, callback){
	var query = {username: username};
	UserModel.findOne(query, callback);
}

module.exports.getById = function(id, callback){
	UserModel.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
