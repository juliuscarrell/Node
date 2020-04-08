var msg = require('./JulesMiddleware.js')
const express = require("express");
const route = express();
const hostname = "127.0.0.1";
const port = 5005;
const url = require("url");
var bodyParser = require("body-parser");
// route.use(julesMiddleware);
route.use(bodyParser.json());
// route.use("/profile", require("./JulesMiddleware"));

route.get("/account", (req, res) => {
  console.log("Get Request called!");
  // var url_elems = url.parse(req.url, true);
  // var query = url_elems.query;
  // name = query.name;
  res.end("Welcome ");
});

route.post("/profile", msg, (req, res) => {
  console.log("Get Request called!  ");
  // var newData = req.body;
  // console.log(newData.name);
  res.end("Profile updates your name is now ");
});

route.listen(port, () => console.log("Server is Running"));

function julesMiddleware(req, res, next) {
  console.log(req);
  next();
}

// function specificMiddleware(req, res, next) {
//   console.log(req.body);

//   if (req.body.email.indexOf("@") >= 0) {
//     next();
//   } else {
//     res.send("Not an email bruv");
//   }
//   if (true) {
//     next();
//   } else {
//     res.send("Not an email bruv");
//   }

