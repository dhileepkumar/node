var mongoose = require('mongoose');

exports.homedetails = function(req,res){
	var _text= {name:"homedetails"};
	console.log(_text);
	res.json(_text);
}