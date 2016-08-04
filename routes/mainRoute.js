var Controller = require ('../controllers/mergeController');

module.exports = function(app) {
var uri = '/api/mergerequest';
	
	app.get('/api/mergerequest', Controller.getMergeRequest);
	
	app.post('/api/mergerequest', Controller.setMergeRequest);
	
	app.get('*', function(req, res) {
		res.sendFile('/angular/index.html');
	});
};
