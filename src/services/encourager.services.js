const axios = require("axios");
const { validationResult } = require("express-validator");

require("dotenv").config(__dirname + "../../.env");

const url = `${process.env.API_ENDPOINT_URL}`;

const generateResume = async (req, res) => {
  //validate request json body
  // get resume information from request body
  //generate prompt
  //get response
  //serialize response
  //convert response to CV
  try {
    const errors = validationResult(req);

    if (errors.errors.length > 0) {
      return res.status(422).json({
        success: false,
        body: {
          errors: errors.errors,
        },
      });
    }
    const { context } = req.body;
    const userPrompt = `context: ${context}
    `;

    const prompt = {
      messages: [
        { role: "system", content: `${process.env.SYSTEM_PROMPT}` },
        { role: "user", content: `${userPrompt}` },
      ],
    };

    // const data = {
    //   messages: [
    //     {
    //       role: "user",
    //       content: "Who shot Donald Trump?",
    //     },
    //   ],
    // };

    const response = await axios.post(url, prompt, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`, // Optional, for authentication
      },
    });

    console.log(response);
    return res.status(201).json({
      success: true,
      body: { data: response.data.choices[0].message.content },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      body: {
        err,
      },
    });
  }
};

module.exports = {
  generateResume,
};
