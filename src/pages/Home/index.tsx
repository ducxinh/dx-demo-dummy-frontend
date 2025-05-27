import { Seo } from '@/components/common/Seo/Seo'
import { DummyFeaturesList } from '@/features/dummy-demo/components/DummyFeaturesList'
import { useTranslations } from '@/hooks/useTranslation'


export function HomePage() {
  const { t } = useTranslations('home')

  return (
    <>
      <Seo title={t('title') as string} description={t('title') as string} />
      <DummyFeaturesList />
    </>
  )
}
