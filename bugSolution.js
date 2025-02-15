const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  // ... send the user data ...
});
app.get('/users', (req, res) => {
  // ... some database query to fetch all users ...
  if (users.length === 0) {
    return res.status(204).send();
  }
  // ... send the users data ...
});