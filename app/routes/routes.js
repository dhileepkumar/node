var ctrl_path = process.cwd()+'/app/',
	express = require('express'),
	RouteController =  require(ctrl_path+'/controllers/RouteController');
	router = express.Router();
	
router.get('/',RouteController.homedetails);
module.exports=router;