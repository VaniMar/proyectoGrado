var mongoose = require('mongoose');
var Schema = mongoose.Schema;

MergeSchema = new Schema({
	user_name: String,
	url: String,
	action: String,
	project_name: String
});

module.exports = mongoose.model('MergeRequest', MergeSchema);
