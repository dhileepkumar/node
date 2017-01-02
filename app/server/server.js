var path = process.cwd()+'/app/',
	config = require(path+'config/config'),
	app = require(path + 'app');
	
	// console.log(app)
	
	
	app.set('port',config.get('port'));
	
var _server_details = app.listen(app.get('port'),function(){
	console.log('server started in the port Number',app.get('port'));
})