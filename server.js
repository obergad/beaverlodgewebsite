/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Anthony Martin
 * Github: anthymart
 * Email: martian8@oregonstate.edu
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;


var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req, res){
  res.status(200).render('people');
});

app.get('/index.html', function(req, res){
  res.status(200).render('people');
});


app.get('/people', function(req, res){
  res.status(200).render('people', {
    game: "League of Legends",
    username: "Linkage"
  });
});

app.get('*', function (req, res) {
  console.log(req.url);
  res.status(404).render('404');
});

MongoClient.connect(mongoUrl,  { useNewUrlParser: true }, function (err, client) {
  if (err) {
    throw err;
  }
  console.log("Connected to mongo");
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});
