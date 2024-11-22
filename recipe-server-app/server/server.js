require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routes/recipes_router');
const app = express();

app.use(express.json());

app.use('/recipe', recipeRouter);

const MONGODB_KEY = process.env.MONGODB_KEY;
mongoose.connect(MONGODB_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(8001, () => {
  console.log('Recipe server is running on port 8001');
});
