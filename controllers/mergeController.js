var MergeRequest = require('../models/mergeRequest');

exports.getMergeRequest = function (req, res){
	MergeRequest.find(
		function(err, mergeRequest) {
			if (err)
				res.send(err)
					res.json(mergeRequest); 
				}
			);
}

exports.setMergeRequest = function(req, res, next) {
	var body = req.body;
		res.send(body);
		console.log("ok");
	MergeRequest.create(
		{user_name : body.user.name,
		 url: body.object_attributes.url, 
		 action: body.action, 
		 project_name: body.object_attributes.source.name
		}, 
		function(err, mergeRequest) {
			if (err) return next(err);
				res.json(mergeRequest);
		});
}
