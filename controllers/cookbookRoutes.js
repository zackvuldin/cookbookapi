const express = require('express');
const router = express.Router();

// Require the Cookbook controller.
const cookbookController = require('./cookbooks');

// Write the route to list all cookbooks
router.get('/', cookbookController.getAll);

// Write the route to get cookbook by title
router.get('/:title', cookbookController.byTitle);

// Write the route to get cookbook by year published
router.get('/year/:yearPublished', cookbookController.byYear);

// Write the route to create a cookbook
router.put('/', cookbookController.createCookbook);

// Write the route to update a cookbook
router.post('/:id', cookbookController.updateCookbook);

// Write the route to delete the cookbook by title
router.delete('/:title', cookbookController.deleteCookbook);

module.exports = router;
