var http = require('http');
var fs = require('fs');
var app=require('./app');
var db=require("./db.js");
var employee=require("./employees.js");

app.listen(8080, function () {
   console.log('Example app listening on port 8080!');
  });

db.connect(function(err, database){
  if (err) throw Error("Unable to connect to db");
  else{
    console.log("Connected to database!");
    employee.seed (function(err, seeded){
    if (err)
      throw Error("Couldn't seed.");
    else if (seeded)
      console.log("Employees are added to database.");
    else
      console.log("Nothing's added to database.");
    });
  }
});

