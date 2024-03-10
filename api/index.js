const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to serve static files from the "build" directory
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Route handler for serving the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
