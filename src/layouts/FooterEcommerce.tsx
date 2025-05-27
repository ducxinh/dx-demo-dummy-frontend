import { InternalLink, InternalLink as Link } from '@/components/common/InternalLink'
import { useTranslations } from '@/hooks/useTranslation'

export function Footer() {
  const { t } = useTranslations('common')
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">{t('footer.instagram')}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.77 0 3.122.01 4.212.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">{t('footer.twitter')}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">{t('footer.youtube')}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.shop')}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/categories" className="text-gray-400 hover:text-white">
                {t('footer.categories')}
              </Link>
            </li>
            <li>
              <Link href="/bestsellers" className="text-gray-400 hover:text-white">
                {t('footer.bestsellers')}
              </Link>
            </li>
            <li>
              <Link href="/new" className="text-gray-400 hover:text-white">
                {t('footer.newArrivals')}
              </Link>
            </li>
            <li>
              <Link href="/deals" className="text-gray-400 hover:text-white">
                {t('footer.dealsDiscounts')}
              </Link>
            </li>
            <li>
              <Link href="/school-program" className="text-gray-400 hover:text-white">
                {t('footer.schoolProgram')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.help')}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-white">
                {t('footer.faq')}
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-gray-400 hover:text-white">
                {t('footer.shippingReturns')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                {t('footer.contactUs')}
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="text-gray-400 hover:text-white">
                {t('footer.trackOrder')}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                {t('footer.privacyPolicy')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
          <address className="not-italic text-gray-400">
            <p className="mb-2">{t('footer.company')}</p>
            <p className="mb-2">{t('footer.address1')}</p>
            <p className="mb-2">{t('footer.address2')}</p>
            <p className="mb-4">{t('footer.country')}</p>
            <p className="mb-2">
              <span className="font-medium">{t('footer.emailLabel')}</span> help-edushop@ducxinh.com
            </p>
            <p>
              <span className="font-medium">{t('footer.phoneLabel')}</span> (123) 456-7890
            </p>
          </address>
        </div>
      </div>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
        © 2023{' '}
        <InternalLink href="https://www.ducxinh.com/" className="hover:underline">
          Nix
        </InternalLink>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
