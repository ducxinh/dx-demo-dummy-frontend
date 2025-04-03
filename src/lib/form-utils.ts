import { Path, UseFormReturn } from 'react-hook-form'

type ApiError = {
  field: string
  message: string
  errors: string[]
}

type ApiErrorResponse = {
  response?: {
    data?: {
      errors?: ApiError[]
    }
  }
}

/**
 * Sets form errors from API response
 * @param form react-hook-form instance
 * @param error Error from API
 * @returns true if errors were set, false otherwise
 */
export function setFormErrorsFromApi<TFieldValues extends Record<string, unknown>>(
  form: UseFormReturn<TFieldValues>,
  error: unknown,
): boolean {
  try {
    const errorResponse = error as ApiErrorResponse
    const responseErrors = errorResponse?.response?.data?.errors

    if (Array.isArray(responseErrors) && responseErrors.length > 0) {
      const apiErrors = responseErrors as ApiError[]

      apiErrors.forEach((err) => {
        if (err.field && err.message) {
          form.setError(err.field as Path<TFieldValues>, {
            type: 'server',
            message: err.message,
          })
        }
      })

      return true
    }

    return false
  } catch {
    return false
  }
}
