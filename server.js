const express = require('express');
const app = express();
const port = 8000;

const routes = require('./routes/index');

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
