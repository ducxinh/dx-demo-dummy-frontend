import { Seo } from '@/components/common/Seo/Seo'
import { Home } from '@/features/home-ecommerce/components/Home'
import { useTranslations } from '@/hooks/useTranslation'

export function HomePage() {
  const { t } = useTranslations('home')
  return (
    <>
      <Seo title={t('title') as string} description={t('title') as string} />
      <div className="">
        <Home />
      </div>
    </>
  )
}
