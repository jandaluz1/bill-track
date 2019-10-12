const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.listen(5000, () => {
  console.log('Listening on port 3000...');
});
