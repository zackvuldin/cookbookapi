//Import connection
const mongoose = require('../db/connection');

/* Create Author as new schema*/
const AuthorSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	cookbooks: [
		{
			ref: 'Cookbook',
			type: mongoose.Schema.Types.ObjectId,
		},
	],
});

//export model named "Author"
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
