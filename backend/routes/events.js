const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Events route works");
});

module.exports = router;
