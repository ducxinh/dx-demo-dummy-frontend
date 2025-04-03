import { LoadingWrapper } from './Style'

interface Props {
  className?: string
}
export function LoadingOverlay(props: Props) {
  const { className } = props
  return (
    <LoadingWrapper className={className}>
      <div className="loading">
        {Array(12)
          .fill(1)
          .map((item, index) => (
            <div key={index}> </div>
          ))}
      </div>
    </LoadingWrapper>
  )
}

LoadingOverlay.defaultProps = {
  className: '',
}
