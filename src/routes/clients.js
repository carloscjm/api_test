const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
// require('dotenv').config();

router.get('/', auth, (req, res) => {
  res.send('Get all contacts');
});

module.exports = router;
