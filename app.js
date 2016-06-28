var assert = require('assert');
var express = require('express');
//var mongodb = require('mongodb').MongoClient;
var app = express();
var employees= require("../Employees.json");
var path=require('path');

//var DB=null;

// mongodb.connect('mongodb://localhost:27017/diary_db', function(err, db) {
//     if (err) throw err;
//     DB = db;
//     var post = {
//         "header": "Title added with JavaScript From DB",
//         "body": "This post's body text was populated by sending a get request to /api/post"
//     };
//     // http://mongodb.github.io/node-mongodb-native/2.1/api/Collection.html#updateOne
//     db.collection('post').updateOne(post, post, {
//         upsert: true,
//         w: 1
//     }, function(err, result) {
//         assert.equal(null, err);
//         assert.equal(1, result.result.n);
//         console.log('Db Connected and one post inserted');
//     });
// });



app.use(express.static(path.join(__dirname,'./public')));

// /home/jojo/31-4294app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
//eh howa el _dirname dah gay menen??!!
// app.get('/', function (req, res) {
//   res.render('index');
// });

app.get('/api/employee', function (req, res) {
  employees.getEmployeeFromJSON(function(err, employee){
    if(err) throw Error ("Couldn't get employee.");
    console.log(employee)
      res.json(employee);
  })
});

app.get('/api/employees', function (req, res) {
 employees.getEmployeesFromJSON(function(err, employees){
    if(err) throw Error ("Couldn't get employee.");
    res.json(employees);
  });
});


// app.get('/css/style.css', function(req, res) {
//    res.sendFile(__dirname + '/public/css/style.css'); 
// });


// app.get('/api/post', function(req, res) {
//     var post = {
//         "header": "Title added with Ajax from a /api/post route",
//         "body": "This post's body text was populated with JavaScript"
//     }
//     res.send(post)
// });

// app.get('/', function(req, res) {
  
//     res.sendFile(post)
// });
module.exports = app;