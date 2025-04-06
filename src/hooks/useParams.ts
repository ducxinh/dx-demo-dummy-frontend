import { useParams as useParamsBase } from 'react-router-dom'

export function useParams() {
  return useParamsBase()
}

/**
 * Usage:
 * Docs: https://nextjs.org/docs/app/api-reference/functions/use-search-params
 * import { useParams } from '@/hooks/useParams'
 * const { code } = useParams()
 */
