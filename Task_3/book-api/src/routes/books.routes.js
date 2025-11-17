// src/routes/books.routes.js
// Defines endpoints for /books

const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books.controller');

// GET /books  - get all books (with optional ?search=)
router.get('/', bookController.getAllBooks);

// GET /books/:id - get one book
router.get('/:id', bookController.getBookById);

// POST /books - create new book
router.post('/', bookController.createBook);

// PUT /books/:id - update a book
router.put('/:id', bookController.updateBook);

// DELETE /books/:id - delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
