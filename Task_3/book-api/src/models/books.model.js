// src/models/books.model.js
// Simple in-memory "database" for books

let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
  { id: 2, title: "Clean Code", author: "Robert C. Martin" },
];

// Helper: generate next numeric ID
const nextId = () => {
  if (books.length === 0) return 1;
  return Math.max(...books.map((b) => b.id)) + 1;
};

// Get all books, with optional search
exports.findAll = (search) => {
  if (!search) return books;

  const q = search.toLowerCase();
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
  );
};

// Get book by id
exports.findById = (id) => {
  return books.find((b) => b.id === id);
};

// Create new book
exports.create = ({ title, author }) => {
  const book = {
    id: nextId(),
    title: title.trim(),
    author: author.trim(),
  };
  books.push(book);
  return book;
};

// Update existing book
exports.update = (id, { title, author }) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;

  const existing = books[index];

  const updated = {
    ...existing,
    title: title !== undefined ? title.trim() : existing.title,
    author: author !== undefined ? author.trim() : existing.author,
  };

  books[index] = updated;
  return updated;
};

// Delete book
exports.remove = (id) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  const removed = books.splice(index, 1)[0];
  return removed;
};
