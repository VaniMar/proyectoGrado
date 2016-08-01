var MergeRequest = require('../models/mergeRequest');

// Obtiene todos los objetos Persona de la base de datos
exports.getMergeRequest = function (req, res){
	MergeRequest.find(
		function(err, mergeRequest) {
			if (err)
				res.send(err)
					res.json(mergeRequest); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setMergeRequest = function(req, res) {

		// Creo el objeto Persona
		MergeRequest.create(
			{user_name : req.body.user.name,url: req.body.url, action: req.body.action, project_name: req.body.object_attributes.source.name}, 
			function(err, mergeRequest) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				MergeRequest.find(function(err, mergeRequest) {
				 	if (err)
				 		res.send(err)
				 	res.json(mergeRequest);
				});
			});

	}
/**
// Modificamos un objeto Persona de la base de datos
exports.updateMergeRequest = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{nombre : req.body.nombre,apellido: req.body.apellido, edad: req.body.edad}}, 
					function(err, persona) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
		});
}**/
