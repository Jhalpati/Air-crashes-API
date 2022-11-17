const express = require("express");
const serverless = require("serverless-http");
const apiData = require("./data.json");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json(
    apiData
  );
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);