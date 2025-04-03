import React, { useEffect, useRef, useState } from 'react'

interface Props {
  otpSize?: number
  code: string
  onChange: (value: string) => void
}
export default function Otp(params: Props) {
  const { otpSize = 6 } = params
  const [otp, setOtp] = useState(Array(otpSize).fill('')) // Array with 6 empty strings
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]) // Array of refs for each input field
  useEffect(() => {
    params.onChange(otp.join(''))
  }, [otp])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'Tab' &&
      !e.metaKey
    ) {
      e.preventDefault()
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      const index = inputRefs.current.indexOf(e.target as HTMLInputElement)
      if (index > 0) {
        setOtp(prevOtp => [...prevOtp.slice(0, index - 1), '', ...prevOtp.slice(index)])
        inputRefs.current[index - 1]?.focus()
      }
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    const index = inputRefs.current.indexOf(target as HTMLInputElement)
    if (target.value) {
      setOtp(prevOtp => [...prevOtp.slice(0, index), target.value, ...prevOtp.slice(index + 1)])
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text')
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return
    }
    const digits = text.split('')
    setOtp(digits)
  }

  return (
    <section className="dark:bg-dark bg-box py-2">
      <div className="container">
        <div>
          <form id="otp-form" className="flex gap-2">
            {otp.map((digit, index) => (
              <div className="h-16 w-16 " key={index}>
                <input
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  onFocus={handleFocus}
                  onPaste={handlePaste}
                  ref={el => (inputRefs.current[index] = el as HTMLInputElement | null)}
                  className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-box px-5 text-center text-lg outline-none ring-blue-700 focus:bg-gray-50 focus:ring-1"
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </section>
  )
}
