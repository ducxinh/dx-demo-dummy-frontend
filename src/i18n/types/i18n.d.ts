// Define the namespace type based on our translation resources
export type I18nNamespace =
  | 'common'
  | 'home'
  | 'about'
  | 'auth'
  | 'dashboard'
  | 'errors'
  | 'forms'
  | 'navigation'
  | 'notifications'
  | 'products'
  | 'zod'
  | 'users'

// export interface TranslationResources {
//   common: {
//     welcome: string;
//     loading: string;
//     error: string;
//     submit: string;
//   };
//   navigation: {
//     home: string;
//     about: string;
//     contact: string;
//   };
//   auth: {
//     verification: {
//       title: string;
//     };
//     home: string;
//     about: string;
//     contact: string;
//     signIn: string;
//   };
// }

// declare module "i18next" {
//   interface CustomTypeOptions {
//     resources: TranslationResources;
//   }
// }
