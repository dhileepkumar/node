var path = process.cwd()+'/app/';
	md5 = require('MD5');

var usermodel = require(path+'models/User').Usermodel;

exports.useradd = function(req,res){
	var _name= req.body.name,
		_email= req.body.email,
		_password= md5(req.body.password),
		_senddata='';
		_user_obj='';
	
	if(_name && _email && _email){
		_user_obj = {
			name : _name,
			email : _email,
			password : _password
		}
		
		var _dataexist = usermodel.find({email: _email},function(err, data){
			if(err){
				throw err;
			}
			else{
				if(data.length>=1){
					_senddata={success:false, data:'', message:"Email Already exist"};
					res.json(_senddata);
				}
				else{
					var _newuser = new usermodel(_user_obj);
					_newuser .save(function(err, userdata){
						if(err){
							throw err;
						}else{
							_senddata={success:true, data:userdata, message:"user Created Successfully"};
							res.json(_senddata);
						}
					});
				}
			}
		});
		
		
	
		// var _newuser = new usermodel(_user_obj);
		// _newuser.save(function(err, data){
			// if(err){ 
				// throw err;
			// }else{
				// _senddata={success:true, data:data, message:"Data inserted Successfully"};
				// res.json(_senddata);
			// }
		// });
		
		
		
		
	}
	else{
		_senddata={success:false, data:"", message:"Datacanot be insrted now"};
		res.json(_senddata);
	}
	
	
}
