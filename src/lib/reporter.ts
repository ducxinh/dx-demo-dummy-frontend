import { ErrorType } from '@/types/common'
import { ApiErrorResponse } from '@/types/error'
import { AxiosError, isAxiosError } from 'axios'
import { toast } from 'sonner'

export const reporter = {
  error(error: ErrorType | AxiosError | string | unknown) {
    console.error(error)
    if (typeof error === 'string') {
      return toast.error(error)
    }
    if (isAxiosError(error)) {
      const axiosErrors = (error as AxiosError<ApiErrorResponse>).response?.data?.errors
      if (axiosErrors?.length && axiosErrors[0].message) {
        return toast.error(axiosErrors[0].message)
      }
      const axiosMessage =
        (error as AxiosError<ApiErrorResponse>).response?.data?.message || error.message
      return toast.error(
        typeof axiosMessage === 'string' ? axiosMessage : JSON.stringify(axiosMessage),
      )
    }
  },
  success(message: string) {
    toast.success(message)
  },
  debug(message: string) {
    console.debug(message)
  },
  info(message: string) {
    console.info(message)
  },
}

export default reporter
