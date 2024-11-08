// Create web server that can accept incoming requests.
// Create a route that accepts incoming POST requests to /comments
// Create a route that accepts incoming GET requests to /comments
// Create a route that accepts incoming GET requests to /comments/:id
// Create a route that accepts incoming PUT requests to /comments/:id
// Create a route that accepts incoming DELETE requests to /comments/:id

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

let comments = [
  {id: 1, body: 'This is a comment'},
  {id: 2, body: 'This is another comment'},
  {id: 3, body: 'This is a third comment'}
];

app.post('/comments', (req, res) => {
  let newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let updatedComment = req.body;
  let comment = comments.find(comment => comment.id === id);
  comment.body = updatedComment.body;
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  let id = parseInt(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.json({deleted: true});
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});