// import styled from 'styled-components/macro'
import './index.css'

export function LoadingWrapper({ children }: { children: any }) {
  return <div className="loading-wrapper">{children}</div>
}

// export const LoadingWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(
//     180deg,
//     #020024 0%,
//     #453053 17%,
//     #565159 40%,
//     #534c58 50%,
//     #453053 74%,
//     #020024 100%
//   );
//   background: none;
//   position: fixed;
//   z-index: 9999;
//   top: 0px;
//   right: 0px;
//   bottom: 0px;
//   left: 0px;
// `
