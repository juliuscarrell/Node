const hostname = "127.0.0.1";
const http = require("http");
const port = 5003;
const url = require("url");
const qs = require("querystring");
let name = "";
let location = "";
let age = "";
let date = "";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.method == "GET") {
    console.log("Returning");
    console.log(req.url);
    console.log(req.url.indexOf("/account"));
    if (req.url.indexOf("/account") >= 0) {
      var url_elems = url.parse(req.url, true);
      var query = url_elems.query;
      console.log("query.name", query.name);
      name = query.name;
      location = query.location;
      age = query.age;
      res.end("Welcome to your account area");
    } else {
      res.end("account not invoked");
    }
  } else if (req.method == "POST") {
    if (req.url.indexOf("/date") >= 0) {
      var url_elems = url.parse(req.url, true);
      var query = url_elems.query;
      datestring = query.date;
      console.log("Date is ", datestring);
      milli = Date.parse(datestring);
      console.log(milli);
      let theDate = new Date(milli);
      console.log("Date object is " + theDate);
      let theDayNum = theDate.getDay();
      console.log("Day number is " + theDayNum);
      let finalDay="";

      switch (theDayNum) {
        case 0:
          finalDay = "Sunday";
          break;
        case 1:
          finalDay = "Monday";
        case 2:
          finalDay = "Tuesday";
        case 3:
          finalDay = "Wednesday";
        case 4:
          finalDay = "Thursday";
        case 5:
          finalDay = "Friday";
        case 6:
          finalDay = "Saturday";
      }

      res.end(finalDay);
    } else {
      var body = "";
      console.log("Request received");
      req.on("data", function(data) {
        body += data;
        console.log(body);
      });
      req.on("end", function() {
        var url_elems = url.parse(req.url, true);
        var query = url_elems.query;
        console.log("query.name", query.name);
        name = query.name;
        location = query.location;
        age = query.age;

        res.end(
          "Hello " +
            name +
            ", you are " +
            age +
            " years old and live in " +
            location +
            "."
        );
      });
    }
  } else {
    console.log("resource not found");
  }
});

server.listen(port, hostname, () => {
  console.log("Sending back the revolutionaries");
});

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 5000;
// const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
