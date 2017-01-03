var express = require('express'),
	http = require('http'),
	path = process.cwd()+'/app/',
	bodyParser = require('body-parser'),
	jsonparser = bodyParser.json(),
	router = require(path+'routes/routes'),
	config = require(path+'config/config'),
	app = express();	
	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',router);

module.exports = app;

