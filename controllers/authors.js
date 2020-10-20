const express = require('express');
const Author = require('../models/Author');

const getAll = (req, res) => {
	Author.find({}).then((authors) => {
		res.json(authors);
	});
};

const byFirstName = (req, res) => {
	console.log('req', req.params);
	Author.findOne({ firstName: req.params.firstName }).then((author) => {
		res.json(author);
	});
};

const createAuthor = (req, res) => {
	const newAuthor = req.body;
	Author.create(newAuthor).then((author) => {
		res.json(author);
	});
};

const updateAuthor = (req, res) => {
	const updatedAuthor = req.body;
	Author.findOneAndUpdate({ _id: req.params.id }, updatedAuthor).then(
		(author) => {
			res.json(author);
		}
	);
};

const deleteAuthorById = (req, res) => {
	Author.findOneAndDelete({ _id: req.params.id }).then((author) => {
		Author.find({}).then((authors) => {
			res.json({
				status: `Deleted: ${req.params.id}`,
				authors,
			});
		});
	});
};

// BONUS
// IVE DONE IT, LESSS GOO. i havent done the bonuses on hws for a while now
const deleteAuthorByName = (req, res) => {
	console.log(req.params.firstName, req.params.lastName);
	Author.findOneAndDelete({
		$and: [
			{ firstName: req.params.firstName },
			{ lastName: req.params.lastName },
		],
	}).then((author) => {
		Author.find({}).then((authors) => {
			res.json({
				status: `Deleted: ${req.params.firstName} ${req.params.lastName}`,
				authors,
			});
		});
	});
};

module.exports = {
	getAll,
	byFirstName,
	createAuthor,
	updateAuthor,
	deleteAuthorById,
	deleteAuthorByName,
};
