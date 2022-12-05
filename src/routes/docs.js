const express = require('express');
const router = express.Router();
const signInLimiter = require("../middlewares/req_limiter")

router.get('/', signInLimiter, (req, res) => {
  res.send('Get all documents');
});

module.exports = router;
