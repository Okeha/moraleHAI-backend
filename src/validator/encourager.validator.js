const { check } = require("express-validator");

const validateGenerateResume = [
  check("context", "context should not be empty and should be a valid string")
    .notEmpty()
    .isString(),
];

module.exports = { validateGenerateResume };
