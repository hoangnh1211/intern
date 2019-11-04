var express = require('express');
var pg = require("pg");
var app = express();

var connectionString = "postgres://postgres:hoanganh23@localhost:5432/hoanganh";

app.get('/data', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM student1 ',function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result);
       });
    });
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});