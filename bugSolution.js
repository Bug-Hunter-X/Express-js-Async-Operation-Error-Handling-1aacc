const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data using async/await ...
    const userData = await fetchUserData(userId); // Simulate async operation
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send({ error: 'Failed to fetch user data' });
  }
});

const fetchUserData = async (userId) => {
  // Simulate an asynchronous operation that might fail
  if (userId === 'invalid') {
    throw new Error('User not found');
  }
  return { userId, name: `User ${userId}` };
};
app.listen(3000, () => console.log('Server listening on port 3000'));