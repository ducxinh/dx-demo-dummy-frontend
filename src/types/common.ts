export interface IListRequestParams {
  search: string | null
  take: number
  page: number
  order?: 'asc' | 'desc' | string | null
  orderBy?: string | null
}

export interface IPagination {
  page: number
  perPage: number
  total: number
  from: number
  to: number
  nextPage: number | null
  prevPage: number | null
}


export type ErrorType = {
  message?: string
  response?: {
    data?: {
      message?: string
    }
  }
}
