import { parseCookies } from 'nookies'

export const getDataFromLS = (dataKey: string) => {
  if (parseCookies()[dataKey]) {
    try {
      return JSON.parse(parseCookies()[dataKey] as string)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {}
  }
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem(dataKey)) {
      try {
        return JSON.parse(window.localStorage.getItem(dataKey) as string)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
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
