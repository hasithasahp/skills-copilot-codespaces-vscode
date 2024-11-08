// Create a web server
// Create a route for GET /comments
// Read the comments.json file
// Send back the comments as JSON
// Start the server

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    // 3. Read the comments.json file
    const comments = require('./comments.json');
    // 4. Send back the comments as JSON
    res.json(comments);
});

// 5. Start the server
app.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});

// Test the API
// In the terminal, run node comments.js
// In the browser, go to http://localhost:3000/comments
// You should see the comments as JSON

// You can also use Postman to test the API
// Open Postman
// Send a GET request to http://localhost:3000/comments
// You should see the comments as JSON