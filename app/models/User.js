var libs = process.cwd()+'/app/';
	mongoose = require('mongoose'),
	db = require(libs + 'config/database');
	mongoose.Promise = global.Promise;
	
var Schema = mongoose.Schema;

var Usermodel = mongoose.model('Usermodel', new Schema({
	name : String,
	email : String,
	password : String
}));

module.exports = {
	Usermodel : Usermodel
}
