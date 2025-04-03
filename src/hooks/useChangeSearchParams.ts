import { useSearchParams } from 'react-router-dom'

const useChangeSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const changeSearchParams = (newParams: Record<string, string | number | boolean>) => {
    const updatedParams = new URLSearchParams(searchParams)
    Object.entries(newParams).forEach(([key, value]) => {
      updatedParams.set(key, value.toString())
    })
    setSearchParams(updatedParams)
  }

  return changeSearchParams
}

export default useChangeSearchParams
