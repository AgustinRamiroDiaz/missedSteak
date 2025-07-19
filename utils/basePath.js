export const withBasePath = (path) => {
  const baseURL = useNuxtApp().$config.app.baseURL || '/'
  const cleanPath = path.replace(/^\//, '')
  return baseURL.endsWith('/') ? baseURL + cleanPath : baseURL + '/' + cleanPath
}