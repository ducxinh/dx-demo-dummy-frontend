import { Seo } from '@/components/common/Seo/Seo'
import { useTranslations } from '@/hooks/useTranslation'

export function AdminHome() {
  const { t } = useTranslations('dashboard')
  return (
    <>
      <Seo title={t('title')} description={t('title')} />
      <section className="">
        <header className="py-16 sm:text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
            <span>{t('title') as string}</span>
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-400">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          </p>
        </header>
      </section>
    </>
  )
}
