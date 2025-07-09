# Migration from 11ty to Next.js

This repository has been successfully migrated from Eleventy (11ty) to Next.js while maintaining all original functionality as a static site.

## What Changed

### Structure
- **Old**: `src/` directory with 11ty structure
- **New**: Standard Next.js structure with `pages/`, `components/`, `lib/`, and `public/`

### Configuration
- **Old**: `eleventy.config.js`
- **New**: `next.config.js` with static export configuration

### Build Process
- **Old**: `npm run build` → `_site/`
- **New**: `npm run build` → `out/` (static export)

### Data Handling
- **Old**: Global data in `_data/` directory
- **New**: Data utilities in `lib/recipes.ts` with `getStaticProps`

### Templates
- **Old**: Nunjucks templates (`.njk` files)
- **New**: React components with TypeScript

## Features Preserved

✅ All recipe data and structure  
✅ Bootstrap-based responsive design  
✅ Modal functionality for recipe details  
✅ GitHub integration for adding/deleting recipes  
✅ Static site generation (no server-side features)  
✅ Same URL structure and navigation  
✅ All styling and assets  

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# The built static site will be in the 'out' directory
```

## Environment Variables

Set `GITHUB_USERNAME_SLASH_REPO` to customize the GitHub repository for recipe management.

## Notes

- The site remains fully static with no server-side functionality
- All original features and user experience are preserved
- Performance improved with Next.js optimizations
- TypeScript support added for better development experience