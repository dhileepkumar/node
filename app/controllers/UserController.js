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
		
	}
	else{
		_senddata={success:false, data:"", message:"Datacanot be insrted now"};
		res.json(_senddata);
	}
	
	
}

/* user list function */
exports.userlist = function(req,res){
	var _senddata = '';
	var _userlist = new Array();
	usermodel.find({}, function(err, datas){
		if(datas.length<=0){
			_senddata={success:false, data:'', message:"No data to list"};
			res.json(_senddata);
		}else{
			datas.forEach(function(items){
				_userlist.push({
					id : items.id,
					namde : items.email,
					email : items.name,
				});
			})
			_senddata={success:true, data:_userlist, message:"users listed successfully"};
			res.json(_senddata);
		}
	});
}

exports.deleteuser = function(req, res){
	var _senddata = '',
		_userid = req.body.id;
		if(_userid){
			usermodel.remove({_id:_userid}, function(err,data){
				if(err){
					throw err;
				}
				else{
					_senddata = {success:true, data:'', message:"user deletd successfully"};
					res.send(_senddata);
				}
			})
		}
		else{
			_senddata = {success:false, data:'', message:"no id exists to delete"};
			res.send(_senddata);
		}
}

exports.userlistone = function (req, res){
	var _senddata = '',
		_userid = req.body.userid,
		_userdetails ='';
		if(_userid){
			usermodel.findOne({_id:_userid}, function(err, data){
				if(err){
					_senddata = {success:false, data:'', message:"Some problem with searching this ID"};
					res.send(_senddata);
				}
				else{
					if(data){
						_userdetails = {
							id:data._id,
							name:data.name,
							email:data.email,
						};
						_senddata = {success:true, data:_userdetails, message:"User Details fetched successfully"};
						res.send(_senddata);
						
					}else{
						_senddata = {success:false, data:'', message:"Some problem with searching this ID"};
						res.send(_senddata);
					}
				}
			});
		}
		else{
			_senddata = {success:false, data:'', message:"No id exists to list"};
			res.send(_senddata);
		}
}

exports.updateuser = function(req, res){
	var _senddata ='',
		_id = req.body.userid,
		_name = req.body.name,
		_password = req.body.password,
		_email= req.body.email,
		_userdetails = '';
		
		if(_id && _name && _email){
			if(_password){
				_userdetails = {
					name : _name,
					email : _email,
					password : md5(_password)
				}
			}else{
				_userdetails = {
					name : _name,
					email : _email
				}
			}
			
			usermodel.find({ email: _email, _id:{$ne : _id}},function(err, data){
				if(data.length>=1){
					_senddata = {success:false, data:'', message:"Email ID Already Exists"};
					res.send(_senddata);
				}
				else{
					usermodel.findOneAndUpdate({_id:_id},{$set:_userdetails},function(err, data){
						if(err){
							_senddata = {success:false, data:err, message:"User details cannot be updated now"};
							res.send(_senddata);
						}
						else{
							_senddata = {success:true, data:data, message:"User details Updated"};
							res.send(_senddata);
						}
					});
				}
			});
			
			
		}
		else{
			_senddata = {success:false, data:'', message:"No id exists to update the user"};
			res.send(_senddata);
		}
		
}


