import fs from 'fs';
import path from 'path';

function loadRecipesFromCategory(category) {
  const recipesDir = path.join(process.cwd(), 'lib', 'recipes', category);
  try {
    const files = fs.readdirSync(recipesDir);
    const recipes = [];
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(recipesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const recipe = JSON.parse(content);
        const filenameWithoutExt = file.replace('.json', '');
        recipes.push({ recipe, filename: filenameWithoutExt });
      }
    }
    
    return recipes;
  } catch (error) {
    console.error(`Error loading recipes from category ${category}:`, error);
    return [];
  }
}

const allRecipes = {
  basics: loadRecipesFromCategory('basics'),
  savory: loadRecipesFromCategory('savory'),
  sweet: loadRecipesFromCategory('sweet')
};

// Ensure lib/data directory exists
const dataDir = path.join(process.cwd(), 'lib', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync('lib/data/recipes.json', JSON.stringify(allRecipes, null, 2));
console.log('✓ Recipes exported to lib/data/recipes.json');