var sqlite = require('sqlite3');
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var db = require('./database.js');

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

router.route('/link/:link?').get(function(req, res) {
  var link = req.params.link;
  var query = 'SELECT link FROM links WHERE id=?;';
  var values = ''; //function that changes link parameter into integer

  db.all(query, values, function(err, url) {
    if (err) {
      console.log(err);
      res.send('link cannot be obtained');
    }
    else {
      console.log('got link: %s', url);
      res.json(url);
      //redirect?
    }
  });
})
.post(function(req, res) {
  var url = req.body.url;
  var id = ''; //encode url into short url
  var query = 'INSERT INTO links(id, link) VALUES(?,?)';
  var values = [id, url];

  db.run(query, values, function(err) {
    if (err) {
      console.log(err);
      res.send('invalid POST');
    }
    else {
      res.json({ message: 'shortlink created' });
    }
  });
});

app.use('/', router);
server = app.listen(port);
console.log('Express server listening on port %d in %s mode.', port, app.settings.env);
