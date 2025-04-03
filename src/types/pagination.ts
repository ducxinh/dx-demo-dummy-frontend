export type PaginationParams = {
  page?: number
  perPage?: number
}

export type IPagination = {
  page: number
  perPage: number
  total: number
  from: number
  to: number
  nextPage: number | null
  prevPage: number | null
  lastPage: number
}

export type PaginatedResponse<T> = {
  data: T[]
  pagination: IPagination
}
