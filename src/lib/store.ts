import { parseCookies } from 'nookies'
// import Cookies from 'js-cookie'
// Cookies.get(AUTH_CONFIG.userKey)

export const getDataFromLS = (dataKey: string, parseJson = false) => {
  if (parseCookies()[dataKey]) {
    console.log('parseCookies()[dataKey]', parseCookies()[dataKey])
    try {
      return parseJson ? JSON.parse(parseCookies()[dataKey] as string) : parseCookies()[dataKey]
    } catch (error) {
      console.log('error', error)
      console.error('Error parsing cookie data:', error)
      return undefined
    }
  }
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem(dataKey)) {
      try {
        return JSON.parse(window.localStorage.getItem(dataKey) as string)
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
