// src/controllers/books.controller.js
// Controller = handles request & response logic

const Books = require('../models/books.model');

// GET /books
exports.getAllBooks = (req, res) => {
  const { search } = req.query;
  const result = Books.findAll(search);
  res.json(result);
};

// GET /books/:id
exports.getBookById = (req, res) => {
  const id = Number(req.params.id);
  const book = Books.findById(id);

  if (!book) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  res.json(book);
};

// POST /books
exports.createBook = (req, res) => {
  const { title, author } = req.body;

  // Basic validation
  if (!title || !author) {
    return res
      .status(400)
      .json({ error: "Both 'title' and 'author' are required." });
  }

  const newBook = Books.create({ title, author });
  res.status(201).json(newBook);
};

// PUT /books/:id
exports.updateBook = (req, res) => {
  const id = Number(req.params.id);
  const { title, author } = req.body;

  // Optional validation (if field is given, it must not be empty)
  if (title !== undefined && !title.trim()) {
    return res
      .status(400)
      .json({ error: "'title' cannot be empty if provided." });
  }

  if (author !== undefined && !author.trim()) {
    return res
      .status(400)
      .json({ error: "'author' cannot be empty if provided." });
  }

  const updated = Books.update(id, { title, author });

  if (!updated) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  res.json(updated);
};

// DELETE /books/:id
exports.deleteBook = (req, res) => {
  const id = Number(req.params.id);
  const removed = Books.remove(id);

  if (!removed) {
    return res.status(404).json({ error: `Book with id ${id} not found` });
  }

  res.json({
    message: `Book with id ${id} deleted successfully`,
    book: removed,
  });
};
