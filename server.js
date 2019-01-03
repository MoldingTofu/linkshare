//var sqlite = require('sqlite3');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

//var db = require('./database.js');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(function(req, res, next) { // request, response, next
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, cache-control');
    return next();
});

var port = 8080;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('server in use');
  next();
});

router.route('/').get(function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', router);
server = app.listen(port);
console.log('Express server listening on port %d in %s mode.', port, app.settings.env);
