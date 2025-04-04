import i18next from 'i18next'
import { z } from 'zod'
import { zodI18nMap, makeZodI18nMap } from 'zod-i18n-map'
// Import your language translation files
import translationVi from 'zod-i18n-map/locales/en/zod.json'
import translation from 'zod-i18n-map/locales/en/zod.json'
import translationJa from 'zod-i18n-map/locales/ja/zod.json'

// lng and resources key depend on your locale.
i18next.init({
  lng: 'vi',
  // lng: 'en',
  resources: {
    ja: { zod: translationJa },
    en: { zod: translation },
    vi: { zod: translationVi },
  },
})
z.setErrorMap(makeZodI18nMap({ ns: 'zod' }))

// export configured zod instance
export { z }
