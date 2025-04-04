// import i18next from 'i18next'
import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
// Import your language translation files
// import translationEn from 'zod-i18n-map/locales/en/zod.json'
// import translation from 'zod-i18n-map/locales/en/zod.json'

// lng and resources key depend on your locale.
// i18next.init({
//   // lng: 'ja',
//   lng: 'en',
//   resources: {
//     // ja: { zod: translation },
//     // en: { zod: translationEn },
//     // vi: { zod: translationEn },
//   },
// })
z.setErrorMap(zodI18nMap)

// export configured zod instance
export { z }
