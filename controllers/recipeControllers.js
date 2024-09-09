// controllers/recipeController.js
const Recipe = require('../models/recipe');

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRecipes };
