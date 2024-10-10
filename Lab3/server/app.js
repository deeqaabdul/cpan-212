const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const upload = multer({ dest: 'uploads/' });

app.post('/save/multiple', upload.array('files'), (req, res) => {
  res.send('Multiple files uploaded successfully.');
});

app.post('/save/single', upload.single('file'), (req, res) => {
  res.send('Single file uploaded successfully.');
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
