const express = require('express');
const Recipe = require('../models/recipeModel');
const router = express.Router();

// get recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes', error });
  }
});

// post new recipes
router.post('/', async (req, res) => {
  try {
    const { name, description, difficulty, ingredients, steps } = req.body;
    const newRecipe = new Recipe({ name, description, difficulty, ingredients, steps });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: 'Error adding recipe', error });
  }
});

// get by id
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe', error });
  }
});

// put update for id
router.put('/:id', async (req, res) => {
  try {
    const { name, description, difficulty, ingredients, steps } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, description, difficulty, ingredients, steps },
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: 'Error updating recipe', error });
  }
});

// delete recipe by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipe', error });
  }
});

module.exports = router;
