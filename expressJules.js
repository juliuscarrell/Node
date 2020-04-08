const express = require("express");
const route = express();
const hostname = "127.0.0.1";
const port = 5004;
const url = require("url");
var bodyParser = require("body-parser");
route.use(bodyParser.json());

route.get("/", (req, res) => {
  console.log("Get Request called!");
  res.end("I am GET request!");
});

route.post("/", (req, res) => {
  console.log("Get Request called!");
  res.end("I am POST request!");
});

route.get("/account", (req, res) => {
  console.log("Get Request called!");
  var url_elems = url.parse(req.url, true);
  var query = url_elems.query;
  name = query.name;
  res.end("Welcome " + name + " to your account");
});

route.post("/profile", (req, res) => {
  console.log("Get Request called!  " + req.body.name);
  var newData = req.body;
  console.log(newData.name);
  res.end("Profile updates your name is now " + newData.name);
});

route.listen(port, () => console.log("Server is Running"));
