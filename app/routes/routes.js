var ctrl_path = process.cwd()+'/app/',
	express = require('express'),
	RouteController =  require(ctrl_path+'/controllers/RouteController');
	UserController =  require(ctrl_path+'/controllers/UserController');
	router = express.Router();

/* home route for get and post */	
router.get('/',RouteController.homedetails);
router.post('/',RouteController.homedetails);
/* home route ends for get and post */

/* user roots*/
router.get('/userlist',UserController.userlist);
router.post('/useradd',UserController.useradd);
router.post('/userlistone',UserController.userlistone);
router.post('/updateuser',UserController.updateuser);
router.delete('/deleteuser',UserController.deleteuser);
/*create user routes ends */

module.exports = router;
