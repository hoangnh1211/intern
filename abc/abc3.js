var app = require('express')();
var bodyParser = require('body-parser');

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sessions', function (req, res, next) {
  var body = req.body;
  var email = body.email;
  var password = body.password;
  console.log(body);
  // ...
});
fs.readFile('./abcd/src/db.json',function(err,data){
  const db=JSON.parse(data);
  const userabc= db.find(user => user.username == username);
  if (userabc && userabc.password == password ) {
      return done(null,userabc);
          } else {
              return done(null,false)
              }
})
