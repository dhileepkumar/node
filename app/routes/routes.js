var ctrl_path = process.cwd()+'/app/',
	express = require('express'),
	RouteController =  require(ctrl_path+'/controllers/RouteController');
	UserController =  require(ctrl_path+'/controllers/UserController');
	router = express.Router();

/* home route for get and post */	
router.get('/',RouteController.homedetails);
router.post('/',RouteController.homedetails);
/* home route ends for get and post */

/*create user */
router.post('/useradd',UserController.useradd);
/*create user routes ends */

module.exports = router;
