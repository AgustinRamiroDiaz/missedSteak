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