<script setup>
const { $t, $defineI18nRoute } = useNuxtApp();

$defineI18nRoute({
  locales: {
    en: { title: "hello", greetings: "How are you today" },
    fr: { title: "bonjour", greetings: "Comment allez-vous aujourd'hui ?" }
  },
  localeRoutes: {
    en: '/about-us',
    fr: '/a-propos',
  }
});
</script>

<template>
  <h1>{{ $t('title') }}</h1>
  <p>{{ $t('greetings') }}</p>
  <I18nLink to="about-us">About Us</I18nLink>
</template>
