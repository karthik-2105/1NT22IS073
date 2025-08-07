// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/logs', (req, res) => {
  console.log('✅ Received log:', req.body);
  res.status(200).send({ message: 'Log received' });
});

app.listen(port, () => {
  console.log(`🚀 Logger server running at http://localhost:${port}`);
});
