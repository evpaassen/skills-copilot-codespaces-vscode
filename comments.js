// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Load comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Use body parser to parse POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Respond to GET request
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Respond to POST request
app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now(),