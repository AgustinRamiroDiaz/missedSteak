import fs from 'fs';
import path from 'path';

export interface Recipe {
  title: string;
  image: string;
  instructions: string;
  link?: string;
}

export interface RecipeWithFilename {
  recipe: Recipe;
  filename: string;
}

export interface RecipesByCategory {
  basics: RecipeWithFilename[];
  savory: RecipeWithFilename[];
  sweet: RecipeWithFilename[];
}

function loadRecipesFromCategory(category: string): RecipeWithFilename[] {
  const recipesDir = path.join(process.cwd(), 'lib', 'recipes', category);
  
  try {
    const files = fs.readdirSync(recipesDir);
    const recipes: RecipeWithFilename[] = [];
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(recipesDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const recipe = JSON.parse(content);
        const filenameWithoutExt = file.replace('.json', '');
        recipes.push({
          recipe,
          filename: filenameWithoutExt
        });
      }
    }
    
    return recipes;
  } catch (error) {
    console.error(`Error loading recipes from category ${category}:`, error);
    return [];
  }
}

export function getAllRecipes(): RecipesByCategory {
  return {
    basics: loadRecipesFromCategory('basics'),
    savory: loadRecipesFromCategory('savory'),
    sweet: loadRecipesFromCategory('sweet')
  };
}

export function getSiteData() {
  try {
    return {
      github: {
        usernameSlashRepo: process.env.GITHUB_USERNAME_SLASH_REPO ?? "magalipujol/missedSteak"
      }
    };
  } catch (error) {
    console.error('Error loading site data:', error);
    return { github: { usernameSlashRepo: '' } };
  }
}