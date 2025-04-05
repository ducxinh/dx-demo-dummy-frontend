import { parseCookies } from 'nookies'

export const getDataFromLS = (dataKey: string) => {
  if (parseCookies()[dataKey]) {
    try {
      return JSON.parse(parseCookies()[dataKey] as string)
    } catch (error) {
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
