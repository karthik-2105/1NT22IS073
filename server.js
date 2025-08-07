// server.js
const express = require('express');
const app = express();
const loggerMiddleware = require('./middleware/loggermiddleware'); // your custom middleware
app.use(express.json());

// Logging route
app.post('/log', loggerMiddleware, (req, res) => {
  res.status(200).json({ message: 'Logged successfully' });
});

app.listen(4000, () => {
  console.log('Logging server listening on port 4000');
});
