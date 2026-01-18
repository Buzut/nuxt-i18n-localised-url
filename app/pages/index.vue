<script setup>
const { $t, $defineI18nRoute } = useNuxtApp();

$defineI18nRoute({
  locales: {
    en: {
      title: "hello",
      greetings: "How are you today"
    },
    fr: {
      title: "bonjour",
      greetings: "Comment allez-vous aujourd'hui ?"
    }
  }
});
</script>

<template>
  <h1>{{ $t('title') }}</h1>
  <p>{{ $t('greetings') }}</p>

  <I18nLink :to="{ name: 'about-us' }">{{ $t('about_us') }}</I18nLink><br>
  <I18nLink :to="{ name: 'products' }">
      {{ $t('all_products') }}
  </I18nLink>
</template>
