var express = require('express'),
	http = require('http'),
	path = process.cwd()+'/app/',
	bodyParser = require('body-parser'),
	router = require(path+'routes/routes'),
	config = require(path+'config/config'),
	
	app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',router);

module.exports = app;

