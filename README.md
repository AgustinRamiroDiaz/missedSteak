# Missed Steak

A recipe website for vegetarian dishes. Built with **Next.js** and deployed to GitHub Pages as a fully static site.

## Features

- Browse recipes by category (Basics, Savory, Sweet)
- Add new recipes directly through GitHub
- Delete recipes through GitHub
- Responsive design with Bootstrap
- Modal popups for recipe details
- Fully static site generation (no server required)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# The built static site will be in the 'out' directory
```

## Adding Recipes

1. Click the "New Recipe" button on the site
2. Fill out the form with recipe details
3. Click "Submit Recipe" to create a new JSON file on GitHub
4. The site will automatically rebuild and deploy

## Recipe Format

Recipes are stored as JSON files in `lib/recipes/` with the following structure:

```json
{
  "title": "Recipe Name",
  "image": "/assets/img/portfolio/image.png",
  "instructions": "HTML-formatted instructions",
  "link": "optional-external-link"
}
```

## Architecture

This site was migrated from Eleventy (11ty) to Next.js while maintaining all functionality:

- **Framework**: Next.js 15 with React and TypeScript
- **Rendering**: Client-side only (no SSR/SSG) for true static generation
- **Data**: Recipes are pre-built into `public/recipes.json` at build time
- **Deployment**: GitHub Actions automatically builds and deploys to GitHub Pages

## Environment Variables

- `GITHUB_USERNAME_SLASH_REPO` - GitHub repository for recipe management
- `BASE_PATH` - Set base path for deployment (automatically set for GitHub Pages)

## Deployment

### GitHub Pages
The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The deployment workflow:
1. Builds the site with the correct base path
2. Exports to the `out` directory
3. Deploys to GitHub Pages

### Other Static Hosts
For other static hosts (Vercel, Netlify, etc.), simply run `npm run build` and deploy the `out` directory.

## Project Structure

- `pages/` - Next.js pages
- `components/` - React components
- `lib/` - Data utilities and types
- `public/` - Static assets
- `scripts/` - Build scripts
- `out/` - Built static site (generated)