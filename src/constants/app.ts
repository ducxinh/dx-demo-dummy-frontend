export const APP_CONFIG = {
  appName: import.meta.env.NEXT_PUBLIC_APP_NAME,
  appEnv: import.meta.env.NEXT_PUBLIC_APP_ENV,
  appUrl: import.meta.env.NEXT_PUBLIC_APP_URL,
  api: {
    url: import.meta.env.NEXT_PUBLIC_APP_API_URL,
    wsUrl: import.meta.env.NEXT_PUBLIC_APP_WS_URL,
  },
}

export const SITE_CONFIG = {
  title: import.meta.env.NEXT_PUBLIC_APP_TITLE || 'Template Starter',
  description: import.meta.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Template Starter',
  url: import.meta.env.NEXT_PUBLIC_APP_URL || 'https://example.com',
}
 