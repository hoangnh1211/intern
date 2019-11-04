var express = require('express');
var app = express();
var session = require('express-session');
var sql = require("mssql");
var fs=require('fs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = {
    user: 'hoanganh1',
    password: 'hoanganh23',
    server: 'localhost',
    database: 'hoanganh'
};
var config1 = {
    user: 'hoanganh1',
    password: 'hoanganh23',
    server: 'localhost',
    database: 'anh'
};
const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'mssql',
    database: 'hoanganh',
    username: 'hoanganh1',
    host: 'localhost',
    port: '1433',
    password: 'hoanganh23',
    logging: true,
})
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
// var bcrypt = require('bcrypt')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create', function (req, res, next) {
  var body = req.body;
  var email = body.email;
  var password = body.password;
   res.send(body);
   
   var sql1 = "insert into khachhang values ("+"'"+body.name+"'"+","+"'"+body.username+"'"+","+"'"+body.password+"'"+ ");" +"create table "+body.username+" (id int, ten varchar(50));";
   sequelize.query(sql1);
});
app.get('/data', function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Company ', function (err, recordset) {
            sql.close();
            res.json(recordset.recordsets[0]);
        });
    });
});
sql.connect(config1, function (err) {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query('select * from anh ', function (err, recordset) {
        sql.close();
        // res.json(recordset.recordsets[0]);
        // console.log(recordset.recordset);
        recordset.recordset.map((menu, index) => {
            var path='/anh/';    
            path=path+menu.name;
            var link='/anh/'+menu.name+'.jpg';
            console.log(path);
            console.log(link);
            app.get(path,function(req,res){
                res.sendFile(__dirname+link);
            })
        })
    });
});

app.get('/anh/banner3', function (req, res) {
    res.sendFile(__dirname+"/anh/banner.jpg");
 });
 app.get('/anh', function (req, res) {
    res.sendFile(__dirname+"/anh/logo.jpg");
 });
app.use(express.static('anh'));
app.get('/logo', function (req, res) {
    res.sendFile(__dirname+"/anh/logo.png");
 });
 app.get('/anh/menu-ao-92w', function (req, res) {
    res.sendFile(__dirname+"/anh/menu-ao-92w.jpg");
 });
 app.get('/anh/banner2', function (req, res) {
    res.sendFile(__dirname+"/anh/banner2.jpg");
 });
 app.get('/anh/ao', function (req, res) {
    res.sendFile(__dirname+"/anh/ao.jpg");
 });
 app.get('/anh/quan', function (req, res) {
    res.sendFile(__dirname+"/anh/quan.jpg");
 });
 app.get('/anh/vay', function (req, res) {
    res.sendFile(__dirname+"/anh/vay.jpg");
 });
 app.get('/anh/banner-web-92_1', function (req, res) {
    res.sendFile(__dirname+"/anh/banner-web-92_1.jpg");
 });
 app.get('/logo1', function (req, res) {
    res.sendFile(__dirname+"/anh/logo1.png");
 });
 app.get('/bct', function (req, res) {
    res.sendFile(__dirname+"/anh/bct.jpg");
 });
app.get('/dataa', function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Product ', function (err, recordset) {
            sql.close();
            res.json(recordset.recordsets[0]);
        });
    });
});
app.use(passport.initialize());
app.use(session({secret:"mysecret"}))
app.use(passport.session());
app.route('/login').post(passport.authenticate('local',{failureRedirect:'/login',
                                                        successRedirect:'/abc'}));
passport.use(new LocalStrategy(
    function(username,password,done){
        sequelize.query("SELECT * FROM khachhang", { type: sequelize.QueryTypes.SELECT})
            .then(users => {
            console.log(users)
            const db=users;
                console.log(db);
                const userabc= db.find(user => user.username == username);
                if (userabc && userabc.password == password ) {
                    return done(null,userabc);
                    } else {
                        return done(null,false)
                            }
            })
    }
) );

passport.serializeUser(function(user,done){
    done(null,user.username);
})

sequelize.authenticate()
.then(function(){ console.log('adad')})

app.listen(4000, function () {
    console.log('Server is running..on Port 4000');
});