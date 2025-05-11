import { Image } from '@/components/common/Image'
import { InternalLink } from '@/components/common/InternalLink'
import { Seo } from '@/components/common/Seo/Seo'
import { Card } from '@/components/ui/card'
import { USE_FIREBASE_AUTH } from '@/constants/auth'
import { SITE_META } from '@/constants/meta'
import { SignupForm } from '@/features/auth/components/SignupForm'
import { SignupForm as SignupFormFirebase } from '@/features/auth/components/firebase/SignupForm'
import { useTranslations } from '@/hooks/useTranslation'

export default function SignupPage() {
  const { t } = useTranslations('auth')
  return (
    <>
      <Seo title={t('signUp')} description={t('signUp')} />
      <div className="">
        <section className="bg-gray-50 py-10 dark:bg-gray-900">
          <div className="mx-auto flex flex-col items-center justify-center py-8 lg:py-0">
            <InternalLink
              href="/"
              className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Site logo"
                className="mr-2 h-8 w-8"
                width={50}
                height={50}
              />
              {SITE_META.DEFAULT.TITLE}
            </InternalLink>
            <Card className="w-full max-w-md shadow-lg">
              <div className="space-y-4 px-6 sm:px-8 md:space-y-6">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  {t('signUpTitle')}
                </h1>
                {USE_FIREBASE_AUTH ? <SignupFormFirebase /> : <SignupForm />}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
