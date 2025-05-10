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

export type IError = {
  message?: string
  response?: {
    data?: {
      message?: string
    }
  }
}
