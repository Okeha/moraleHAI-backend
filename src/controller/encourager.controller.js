const express = require("express");
const { generateResume } = require("../services/encourager.services");
const { defaultRateLimit } = require("../utils/rateLimit");
const { validateGenerateResume } = require("../validator/encourager.validator");
const resumeGeneratorRouter = express.Router();

resumeGeneratorRouter.post(
  "/generate_resume",
  validateGenerateResume,
  defaultRateLimit,
  generateResume
);
module.exports = {
  resumeGeneratorRouter,
};
