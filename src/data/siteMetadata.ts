// @ts-check
export const siteMetadata = {
  // Code Builder, CodeGen
  title: 'IT Demo Dummy',
  author: 'Nguyen Duc Xinh',
  headerTitle: 'IT Demo Dummy',
  // description: 'Discover best practices and tech news shared by the DucXinhIT.',
  description: `Welcome to my website!
  My name is Nguyen Duc Xinh. I'm a senior Full-Stack Web Application Developer with a strong passion and extensive experience in the IT industry.
  My primary love is creating robust web applications and I also enjoy sharing my knowledge through blog writing.
  I hope you find the helpful and valuable information here.`,
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ducxinh.com',
  siteRepo: 'https://github.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-card.png?v=1.1',
  email: 'ducxinh.dn.201@gmail.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: 'G-EFEGG92B73', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
  },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

export default siteMetadata
