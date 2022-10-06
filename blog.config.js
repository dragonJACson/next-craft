const BLOG = {
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#FFFFFF', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222222', // use hex value, don't forget '#'
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  craftConfigShareUrl: 'https://www.craft.do/s/MLM9hYL87gC8jK', // The link to share your craft config
  seo: {
    keywords: ['Blog', 'Craft.do', 'Craft Docs', 'Next.js', 'TailwindCSS']
  },
  analytics: {
    provider: 'umami', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: 'https://umami-production-d3d6.up.railway.app/umami.js', // The url of your Umami script
      websiteId: 'db4701c0-d5f8-4519-9e20-b22578476a96', // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
