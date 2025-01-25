const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some asynchronous operation to fetch user data ...
  // Incorrect placement of res.send
  res.send({ userId });
  // ... more asynchronous operations that might throw an error ...
});
app.listen(3000, () => console.log('Server listening on port 3000'));