// app.js
// Main entry file for the Books REST API

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- Middleware ----
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// ---- Routes ----
const booksRouter = require('./src/routes/books.routes');
app.use('/books', booksRouter); // All book routes start with /books

// ---- Error handling middleware ----
const { errorHandler } = require('./src/middleware/errorHandler');
app.use(errorHandler);

// ---- Start server ----
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
