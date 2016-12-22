var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var app = express();

/*server creation request */
var db = mongoose.connect('mongodb://127.0.0.1:27017/crud');

mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});

/*server creation request Ends */