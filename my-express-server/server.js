const express = require("express");

const app = express();

app.get("/", function(req, res){
  // browser return response
  // res.send("hello");

  // response html file
  res.send("<h1>hello</h1>");
});


app.get("/contact", function(req, res){
  res.send("Contact me at: example@gmail.com");
});

app.get("/about", function(req, res){
  res.send("Contact me at: example@gmail.com");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Code</li><li>Coffee</li><li>Eat</li></ul>");
});


app.listen(4000);
