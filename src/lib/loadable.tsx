import React, { lazy, Suspense, JSX } from 'react'

interface Opts {
  fallback: React.ReactNode
}
type Unpromisify<T> = T extends Promise<infer P> ? P : never

export const lazyLoad = <
  /* eslint-disable */
  T extends Promise<any>,
  U extends React.ComponentType<any>,
  /* eslint-enable */
>(
  importFunc: () => T,
  selectorFunc?: (s: Unpromisify<T>) => U,
  opts: Opts = { fallback: null },
) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc

  if (selectorFunc) {
    lazyFactory = () => importFunc().then((module) => ({ default: selectorFunc(module) }))
  }

  const LazyComponent = lazy(lazyFactory)

  /* eslint-disable-next-line func-names */
  /* eslint-disable-next-line react/display-name */
  return function (props: React.ComponentProps<U>): JSX.Element {
    return (
      <Suspense fallback={opts.fallback!}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }
}
