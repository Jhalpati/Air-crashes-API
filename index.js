const express = require("express");
const app = express();
const apiData = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(apiData);
});

app.listen(port, ()=>{
  console.log(`App is running on PORT http://localhost:${port}`)
})

