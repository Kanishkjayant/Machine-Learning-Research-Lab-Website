//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// respond with "hello world" when a GET request is made to the homepage
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
