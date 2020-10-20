const express = require('express');
const router = express.Router();

// Require the Author Controller.
const authorController = require('./authors');

// Write the route to list all authors
router.get('/', authorController.getAll);

// Write the route to get authors by firstname
router.get('/:firstName', authorController.byFirstName);

// Write the route to create an author:
router.post('/', authorController.createAuthor);

// Write the route to update an author
router.put('/:id', authorController.updateAuthor);

// Update the cookbook using Postman.
router.delete('/:id', authorController.deleteAuthorById);

// Bonus: Write the route to delete cookbooks by author name.
router.delete('/:firstName/:lastName', authorController.deleteAuthorByName);

module.exports = router;
