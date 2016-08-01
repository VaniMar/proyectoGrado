var Controller = require ('../controllers/mergeController');

module.exports = function(app) {
var uri = '/api/mergerequest';
	// devolver todos los Personas
	app.get('/api/mergerequest', Controller.getMergeRequest);
	// Crear una nueva Persona
	app.post('/api/mergerequest/', Controller.setMergeRequest);
	// Modificar los datos de una Persona
	/**app.put('/api/mergerequest/:mergerequest_id', Controller.updateMergeRequest);
	// Borrar una Persona
	app.delete('/api/mergerequest/:mergerequest_id', Controller.removeMergeRequest);
	// application **/
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
