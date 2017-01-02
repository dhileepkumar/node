var mongoose= require('mongoose'), 
	apppath = process.cwd()+'/app/config/'; 
	dbconfig = require(apppath+'config'); // loading config.js
	
	mongoose.connect(dbconfig.get('mongoose:uri')); // creating mongoose connection 
	
var _dbconnection = mongoose.connection; /* creating Db connection */

_dbconnection.on('error',function(err){
	console.log(err);
})

_dbconnection.once('open', function dbcondetails(){
	console.log('DB Connected successfully');
});
	
module.exports = _dbconnection;