const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' });
});

app.listen(5000, () => {
  console.log('Listening on port 3000...');
});
