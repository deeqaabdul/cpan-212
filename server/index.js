const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  console.log('Received data:', req.body);

  res.json({ message: 'Data received successfully', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
