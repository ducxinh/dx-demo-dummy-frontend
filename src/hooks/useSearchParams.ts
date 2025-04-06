import { useSearchParams as useSearchParamsReact } from 'react-router-dom'

export function useSearchParams() {
  return useSearchParamsReact()
  // const [searchParams, setSearchParams] = useSearchParamsReact()
  // return [searchParams, setSearchParams]
}
