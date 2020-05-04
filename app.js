var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about");
});

// For using Goorm 
// app.listen(3000, function(){ 
//   console.log("Its ALIVE... server has started!!"); 
// });

// When releasing to live
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});

