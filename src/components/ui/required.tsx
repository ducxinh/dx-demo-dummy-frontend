// import { StarIcon } from '@heroicons/react/24/solid'

type RequiredProps = {
  show?: boolean
}

export function Required({ show = true }: RequiredProps) {
  if (!show) return null
  return <span className="text-red-500">*</span>
}
