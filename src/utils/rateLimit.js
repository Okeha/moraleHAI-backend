const rateLimit = require("express-rate-limit");

const defaultRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: "Rate limit exceeded",
});

module.exports = { defaultRateLimit };
