import { useNavigate as useNavigateReact } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

export function useNavigate() {
  const navigate = useNavigateReact()

  return navigate
}
