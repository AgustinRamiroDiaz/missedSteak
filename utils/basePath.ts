import nextConfig from "../next.config";

/**
 * Prefix a path with the base path
 * @param path - The path to prefix (should start with /)
 * @returns The path with the base path prepended
 */
export function withBasePath(path: string): string {
  if (!nextConfig.basePath) {
    return path;
  }
  
  if (!path.startsWith("/")) {
    return path; // Return as-is if not an absolute path
  }
  return `${nextConfig.basePath}${path}`;
}
