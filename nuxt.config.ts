// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-i18n-micro'],
  ssr: true,

  i18n: {
    locales: [
      { code: 'en', iso: 'en-UK', name: 'English' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
    ],
    autoDetectLanguage: false,
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
    // debug: true,
    disablePageLocales: true
  },

  routeRules: {
    // Cache _nuxt assets for 1 year (JS, CSS, images)
    // '/_nuxt/**': {
    //   headers: { 'cache-control': 'public, max-age=31536000, s-maxage=31536000, immutable' }
    // },

    '/**': {
      swr: 3600,
      headers: { 'cache-control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=3600' }
    }
  },

  nitro: {
    preset: 'cloudflare_module',

    prerender: {
      ignore: [
        '/products/:slug(.*)*',
        '/fr/produits/:slug(.*)*'
      ]
    },

    storage: {
      cache: {
        driver: 'cloudflare-kv-binding',
        binding: 'WEB_CACHE'
      }
    }
  }
})
