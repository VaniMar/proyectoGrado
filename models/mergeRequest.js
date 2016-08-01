var mongoose = require('mongoose');

module.exports = mongoose.model('MergeRequest', {
	user_name: String,
	url: String,
	action: String,
	project_name: String

});
