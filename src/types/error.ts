export type ApiErrorResponseErrorItem = {
  field: string
  message: string
  errors: string[]
}
export type ApiErrorResponse = {
  statusCode: number
  message: string | Record<string, unknown>
  errors: ApiErrorResponseErrorItem[]
}
