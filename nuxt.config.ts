// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-i18n-micro'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-UK', name: 'English' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
    ],
    autoDetectLanguage: false,
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
    debug: true,
    disablePageLocales: true
  }
})
