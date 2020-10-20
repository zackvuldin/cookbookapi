//import connection
const mongoose = require('../db/connection');

/* Create Cookbook as new schema*/
const CookbookSchema = mongoose.Schema({
	title: String,
	yearPublished: Number,
});

//export model
const Cookbook = mongoose.model('Cookbook', CookbookSchema);
module.exports = Cookbook;
