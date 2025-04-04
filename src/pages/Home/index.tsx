import { Seo } from '@/components/common/Seo/Seo';
import { useTranslations } from '@/hooks/useTranslation';

export function HomePage() {
  const { t } = useTranslations('home')
  return (
    <>
      <Seo title={t('title') as string} description={t('title') as string} />
      <div>
        <div className="">{t('title')}</div>
      </div>
    </>
  )
}