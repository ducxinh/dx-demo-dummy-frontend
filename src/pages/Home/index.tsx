import { Seo } from '@/components/common/Seo/Seo'
import { useTranslations } from '@/hooks/useTranslation'
import { Link } from 'react-router-dom'

export function HomePage() {
  const { t } = useTranslations('home')
  return (
    <>
      <Seo title={t('title') as string} description={t('title') as string} />
      <div className="w-full bg-red-600 text-white text-center py-2 font-semibold">
        {t('dummy_alert')}
      </div>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('dummy_features_title')}</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Link to="/todo" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100 hover:border-blue-400">
            <div className="text-xl font-semibold mb-2">{t('todo_list')}</div>
            <div className="text-gray-500">{t('todo_list_desc')}</div>
          </Link>
          <Link to="/ecommerce" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100 hover:border-blue-400">
            <div className="text-xl font-semibold mb-2">{t('ecommerce_demo')}</div>
            <div className="text-gray-500">{t('ecommerce_demo_desc')}</div>
          </Link>
        </div>
      </div>
    </>
  )
}
