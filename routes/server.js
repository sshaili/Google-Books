const path = require("path");
const router = require("express").Router();
const apiBooks = require("../routes/api/books");
const apiServer = require("../routes/api/server");

// API Routes
router.use("/api", apiBooks);
router.use("/api", apiServer);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
