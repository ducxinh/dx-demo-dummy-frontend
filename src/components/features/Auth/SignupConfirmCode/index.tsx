import Otp from '@/components/features/Otp'
import { Button } from '@/components/ui/Button'
import { ROUTE_PATHS } from '@/constants/path'
import authService from '@/components/features/Auth/services/auth-api.service'
import reporter from '@/utils/reporter'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SignupConfirmCode({ email }: { email: string }) {
  const navigate = useNavigate()
  const [isClient, setIsClient] = useState(false)
  const [code, setCode] = useState<string>('')
  const otpSize = 6
  const [loading, setLoading] = useState({ submit: false })

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="" />
  }

  const handleVerifyCode = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (code.length !== otpSize) return
    if (loading.submit) return
    setLoading({ ...loading, submit: true })
    try {
      const payload = {
        email: email,
        code: code,
      }
      await authService.confirmSignup(payload)
      reporter.success('Email confirmation successful')
      navigate(ROUTE_PATHS.AUTH.LOGIN)
    } catch (error) {
      reporter.error('Invalid code')
      reporter.error(error, false)
    } finally {
      setLoading({ ...loading, submit: false })
    }
  }

  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative mx-auto w-full max-w-lg rounded-2xl bg-box px-6 pt-10 pb-9 shadow-xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-3xl font-semibold">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email {email}</p>
              </div>
            </div>
            <div>
              <form action="" method="post" onSubmit={handleVerifyCode}>
                <div className="flex flex-col space-y-16">
                  <Otp
                    code={code}
                    onChange={(value: string) => {
                      setCode(value)
                    }}
                  />
                  <div className="flex flex-col space-y-5">
                    <div>
                      <Button type="submit" disabled={code.length !== otpSize || loading.submit}>
                        Verify Account
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-center space-x-1 text-center text-sm font-medium text-gray-500">
                      <p>Didn't recieve code?</p>{' '}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
