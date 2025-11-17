// src/middleware/errorHandler.js
// Centralized error handling middleware

exports.errorHandler = (err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};
