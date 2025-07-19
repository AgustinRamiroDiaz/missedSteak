/**
 * Get the base path for the application
 * This is used for GitHub Pages deployment where the site is served from a subdirectory
 */
export function getBasePath(): string {
  // In production, Next.js sets __NEXT_DATA__ with the basePath
  if (typeof window !== 'undefined' && (window as any).__NEXT_DATA__?.basePath) {
    return (window as any).__NEXT_DATA__.basePath;
  }
  return '';
}

/**
 * Prefix a path with the base path
 * @param path - The path to prefix (should start with /)
 * @returns The path with the base path prepended
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath();
  if (!path.startsWith('/')) {
    return path; // Return as-is if not an absolute path
  }
  return `${basePath}${path}`;
}