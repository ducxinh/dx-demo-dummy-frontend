export const APP_CONFIG = {
  APP_NAME: import.meta.env.VITE_APP_NAME,
  APP_ENV: import.meta.env.VITE_APP_ENV,
  APP_URL: import.meta.env.VITE_APP_URL,
  API: {
    URL: import.meta.env.VITE_APP_API_URL,
    WS_URL: import.meta.env.VITE_APP_WS_URL,
  },
}

export const SITE_CONFIG = {
  TITLE: import.meta.env.VITE_APP_TITLE || 'Template Starter',
  DESCRIPTION: import.meta.env.VITE_APP_DESCRIPTION || 'Template Starter',
  URL: import.meta.env.VITE_APP_URL || 'https://example.com',
}
