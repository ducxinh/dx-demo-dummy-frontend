import { parseCookies } from 'nookies'
// import Cookies from 'js-cookie'
// Cookies.get(AUTH_CONFIG.USER_KEY)

export const getDataFromLS = (dataKey: string, parseJson = false) => {
  if (parseCookies()[dataKey]) {
    try {
      const value = parseCookies()[dataKey] as string
      return parseJson ? JSON.parse(value) : value
    } catch (error) {
      console.log('error', error)
      console.error('Error parsing cookie data:', error)
      return undefined
    }
  }
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem(dataKey)) {
      try {
        const value = window.localStorage.getItem(dataKey)
        return parseJson ? JSON.parse(value as string) : value
      } catch (error) {
        console.error('Error parsing localStorage data:', error)
        return undefined
      }
    }
  }
  return undefined
}

export const setDataLS = (dataKey: string, data: unknown) => {
  if (typeof window !== 'undefined') {
    if (data) {
      window.localStorage.setItem(dataKey, typeof data === 'string' ? data : JSON.stringify(data))
    }
  }
}

export const clearDataLSItem = (dataKey: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(dataKey)
  }
}
