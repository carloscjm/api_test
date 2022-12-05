const rateLimiter = require("express-rate-limit");
require('dotenv').config();

const limiter = rateLimiter({
    max: process.env.LIMIT_REQUEST,
    windowMs: 60 * 1000 * 1000,
    message: "Too many request from this IP"
});

module.exports = limiter