const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'about.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'pages', '404.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
