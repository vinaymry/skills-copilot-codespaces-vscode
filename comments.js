// Create web server

// Import required modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use body parser to parse JSON data
app.use(bodyParser.json());

// Initialize comments data
var comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Alice', text: 'Hello John' }
];

// Define GET method
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Define POST method
app.post('/comments', function(req, res) {
  var newComment = {
    id: comments.length + 1,