/**
 * Asynchronously loads the component for HomePage
 */

import { LoadingIndicator } from '@/components/common/LoadingIndicator'
import { LoadingWrapper } from '@/components/common/LoadingWrapper'
import { lazyLoad } from '@/lib/loadable'

export const About = lazyLoad(
  () => import('./index'),
  (module) => module.AboutPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)
