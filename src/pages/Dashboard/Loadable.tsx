/**
 * Asynchronously loads the component for HomePage
 */

import { LoadingIndicator } from '@/components/common/LoadingIndicator'
import { LoadingWrapper } from '@/components/common/LoadingWrapper'
import { lazyLoad } from '@/lib/loadable'

export const Dashboard = lazyLoad(
  () => import('./index'),
  (module) => module.Dashboard,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
)
