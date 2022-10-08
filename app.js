const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
var responseMessage = "default";

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
      //console.log(req.body.firstName);
       res.sendFile(__dirname + "/index.html");//res.sendFile(__dirname + "/index.html");
});
app.get("/about.htm", function(req,res){
      //console.log(req.body.firstName);
       res.sendFile(__dirname + "/about.html");//res.sendFile(__dirname + "/index.html");
});

app.post("/test", function(req,res){
      //console.log(req.body.firstName);
       res.sendFile(__dirname + "/about.html");//res.sendFile(__dirname + "/index.html");
});

app.post("/return", function(req,res){
      //console.log(req.body.firstName);
       res.sendFile(__dirname + "/index.html");//res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
