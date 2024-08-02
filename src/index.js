const express = require("express");
const morgan = require("morgan");
const { OpenAI } = require("openai");
const { resumeGeneratorRouter } = require("./controller/encourager.controller");
const cors = require("cors");

require("dotenv").config("../.env");

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", resumeGeneratorRouter);

const port = process.env.PORT || 3000;
const openai = new OpenAI({
  apiKey: `66909b46a445499a9d691634f094d0d8 `,
  baseURL: `${process.env.API_URL}`,
});

models = [
  "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
  "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
  "google/gemma-7b",
  "mistralai/Mistral-7B-Instruct-v0.2",
];

app.get("/", (req, res) => {
  return res.json({
    success: true,
    body: {
      message: "WE ARE UP LIKE MAD!",
    },
  });
});

// app.get("/", async (req, res) => {
//   try {
//     const chatCompletion = await openai.chat.completions.create({
//       model: "mistralai/Mistral-7B-Instruct-v0.2",
//       messages: [
//         {
//           role: "system",
//           content: `${process.env.SYSTEM_PROMPT}`,
//         },
//         {
//           role: "user",
//           content: `Job Description:
// About the job
// Zapcom is a 10 years old, global product engineering and technology solutions company headquartered in the US (United States) that specialises in boutique customer-centric solutions.

// We work with clients across industries like banking/fintech, e-commerce, retail, travel, transportation, and hospitality to help them achieve their business objectives through innovative technology solutions.

// With offices in major cities like Dublin and Dallas in the USA, Toronto in Canada, Global Capability Centre’s in Bangalore and Hyderabad in India, and in Costa Rica, and currently expanding to Saudi Arabia and Europe, we offer exciting global opportunities to work on impactful projects as part of a talented, global and diverse team.

// At Zapcom, we are deeply committed to innovation and staying at the forefront of technology. We specialise in custom software development, cloud migration and implementation, data science, artificial intelligence, machine learning, big data, and full-stack development. Our teams leverage cutting-edge technologies and follow agile development practices to build scalable, high-performing solutions. Being customer centric, we offer flexible engagement models to cater to the unique needs of our clients, from curated pods to staff augmentation and project-based work to long-term partnerships. We commit to quality, innovation, and customer success regardless of the engagement type.

// YOU'LL BE:

//  Working to build out a robust Rest based microservices using Nodejs, Express and Typescript.
//  Shaping the way people use loyalty and the entire structure of our backend architecture.
//  Build frameworks to integrate with various backend loyalty apis with connecting throttling and proper error management.
//  Build the application using Typescript as first class citizen
//  Integrate all the apis with API gateway along with authentication and authorization.
//  Through understanding of integrating with SQL and non-SQL datastores.
//  Managing the technical aspects. Including performance, scalability, and accessibility.
//  Will be providing self-explanatory Swagger to frontend developers/
//  Tackling bugs post-release and resolving them in timely fashion.
//  Strategizing building out the right features based on priority.
//  Will be deploying code with 85% code coverage through unit tests.

// YOU'LL NEED:

//  At least three years’ experience using NodeJS, Express or comparable framework and ability to code using Typescript.
//  Experience in understanding inner quirks with Nodjs Event loop and application model
//  Understand node, Webpack, and babel (beyond just coding in Node).
//  Strong experience with javascript, es6+, Typescript and understanding of integrating with external microservices with performance lens.
//  Experience and comfort developing functional components and web hooks.
//  Good understanding of AWS deployment model and integrating microservices with API gateway.
//  To be a self-starter and a go-getter.
//  To have strong interpersonal skills and be flexible, detail-oriented, professional, easy to get along with, enthusiastic and of high moral character.
//  Excellent communication skills
//  Knowledge of UI frameworks such as React is appreciated.

// BONUS POINTS

//  Any experience in Atlas Javascript framework is a plus
//  Experience is Airline industry is a Plus
//  Experience in non sql databases such as MongoDB, Mongoose and DynamoDB is a plus.
//  Experience using various AWS resources such as Lambda and RDS

// Flexible work from home options available.

// Candidate CV:ANTHONY OKEH
// Backend Web Developer | Data Scientist

// Lagos, Nigeria | P: +2348145732218 | okehanthony1234@gmail.com | https://github.com/Okeha
// CAREER SUMMARY:
// A software engineer with experience across multiple startups, I have a passion for building solutions
// that improves the overall quality of life of the public. I have worked with EdTech, Health Tech and
// Logistics startups in various roles, gaining experience in web development, database management,
// machine learning and software engineering. Currently, I work at Deloitte as a software engineer and
// ML engineer, where I have honed my skills in developing scalable solutions that increase efficiency

// and productivity.

// I am open to software engineering and machine learning engineering roles, and I am excited to
// bring my enthusiasm and skills to a new team. With experience collaborating with cross-functional
// teams and building solutions from scratch, I am confident in my ability to contribute to any project

// and deliver results that exceed expectations.

// EDUCATION
// BABCOCK UNIVERSITY Ilishan-Remo, Ogun.
// BSc Computer Science Aug 2018 – Jul 2022
// Cumulative GPA:4.71/5.0;
// Relevant Coursework: Data Structures and Algorithms; Software Engineering; Operating
// Systems;Artificial Intelligence;
// WORK EXPERIENCE
// DELOITTE Lagos, Nigeria
// Software Engineer: Jan 2023 – Present
// ● Collaborated with 2 cross-functional teams to develop a new data analysis tool that reduced
// project delivery time by 40%.
// ● Designed and executed an automation solution for streamlining asset management processes,
// resulting in an impressive 80% reduction in task duration.
// IT Support Specialist:
// ● Resolved an average of 50 technical issues per month while maintaining a resolution rate of 90%
// within 24 hours of issue reporting.
// ● Maintained an inventory of IT equipment with a net value of over 200 million Naira, with an
// annual depreciation rate of 5%.
// ● Received positive feedback from stakeholders on my timely and effective technical issue
// resolution.
// THE NEXT STAGE LAB(EdTech Start-Up) Remote
// Backend Web Developer Intern: Jul 2022 – Jan 2023
// ● Developed scalable APIs with NodeJs, Express, and PostgreSQL, resulting in a 30% improvement
// in platform speed.
// ● Collaborated with backend development team to develop 10 key features for the platform,
// resulting in a 40% improvement in Front-end Integration
// QUCOON LTD Lagos, Nigeria
// Backend Web Developer Intern: Jan 2021 – Jul 2021
// ● Participated in a 6-month internship program and interacted with 20 experienced IT professionals,
// resulting in a 50% improvement in development efficiency and establishment of best practices.
// ● Collaborated with 5 computer science students to build a website interface, resulting in a 10%
// reduction in bounce rate.
// For More Work Experience and Information check out my Portfolio website below.
// https://okeh-anthony-portfolio.netlify.app/

// PROJECTS
// AGROTECHMINDS (Holistic Agricultural Technology Solution) Aug 2023
// ● Developed a comprehensive AgroTech solution encompassing project management for farmers
// (i.e Task and Team Management Features), streamlined inventory management, and accurate yield
// prediction using machine learning algorithms.
// ● Implemented a microservices architecture, leveraging FastAPI to seamlessly integrate with the
// main Express application.
// ● Significantly reduced operational overhead by automating farm project management, resulting in a
// potential 80% time-saving for users.
// SOCIAL MEDIA SCHOLARSHIP FINDER July 2022
// ● Developed a social media scholarship finder website that has scraped over 1000 scholarship
// opportunities from Twitter and Instagram, resulting in a 20% increase in scholarship opportunity
// search successes.
// ● Designed and developed a responsive front-end with HTML, CSS, and vanilla Javascript,
// resulting in a 40% improvement in mobile user engagement and a 20% increase in accessibility
// compliance.
// ● Developed authentication and other features APIs with NodeJS and Express, resulting in a 30%
// improvement in website response time and a 10% reduction in user errors.
// LUNG ADENOCARCINOMA TREATMENT AND CLINICAL BENEFIT PREDICTION MODEL
// July 2022
// ● Designed, trained, tested and implemented a Machine Learning Predictive Model in a 5-person
// team using Python.
// ● Awarded an A grade in the course.
// ● Compared Machine Learning Classification Algorithms after training the model using accuracy
// score and mean squared error metrics.
// DIGITAL WALLET SYSTEM WITH INTEGRATED QR CODE PAYMENT March 2022
// ● Implemented a new simulation algorithm that mimics real-world payment scenarios, resulting in a
// 10% improvement in payment system speed.
// ● Developed 7 scalable APIs with Node.js and Express.js, resulting in a 30% reduction in payment
// processing time.
// ● Collaborated with one a Front-End Developer to to reduce the project's overall development time
// by 20% which helped to deliver the project ahead of schedule.
// For More Projects and Information check out my Portfolio website below.
// https://okeh-anthony-portfolio.netlify.app/
// ADDITIONAL
// Technical Skills: Advanced in Javascript, HTML/CSS, React, Proficient in Python for Machine Learning
// and Data Science and in NodeJS( ExpressJs, Nest.js). Advanced in PostgreSQL, MySQL, MongoDB.
// Languages: Fluent in English;
// Certifications & Training: Google Cloud Digital Leader
// Certificate of Completion (New-Horizon) - CSCU, CompTIA A+, Installing and Configuring Windows 10
// Client, Java SE8 OCA & OCP, Oracle 12c Administrator, Oracle 12c SQL Fundamentals, Android X8
// Development. Certificate of Achievement (Lumos Learning)- HTML Certification. Jobberman Soft Skills
// Certification. Certificate of Completion (Kaggle) - Introduction to Machine Learning, Intermediate
// Machine Learning, Introduction to AI Ethics, Feature Engineering, Data Visualization.
// Awards: Best Academic Performance in the School of Computing and Engineering Sciences Freshman
// Year. New Horizon International IT Certification Excellence Prize.
// `,
//         },
//       ],
//       temperature: 0.7,
//       max_tokens: 1000,
//     });
//     console.log("AI/ML API:\n", chatCompletion.choices[0].message.content);
//     return res.json({
//       success: true,
//       body: {
//         message: `message sent successfully`,
//         response: chatCompletion.choices[0].message.content,
//       },
//     });
//   } catch (err) {
//     return res.status(500).json({
//       success: false,
//       body: {
//         err,
//       },
//     });
//   }
// });

app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});
