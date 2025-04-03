import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
// import { translations } from 'locales/translations'

export function AboutPage() {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('pages.about.title') as string}</title>
        <meta name="description" content="APP_NAME App" />
      </Helmet>
      <section className="">
        <header className="py-16 sm:text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
            <span>{t('pages.about.title') as string}</span>
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-400">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          </p>
        </header>
      </section>
    </>
  )
}
