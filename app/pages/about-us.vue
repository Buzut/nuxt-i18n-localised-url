<script setup>
const { $t, $defineI18nRoute } = useNuxtApp();

$defineI18nRoute({
  locales: {
    en: { title: "About Us", our_team: "We are a small team led by passion" },
    fr: { title: "À propos de nous", our_team: "Nous sommes une petite équipe guidée par la passion" }
  }
});
</script>

<template>
  <h1>{{ $t('title') }}</h1>
  <p>{{ $t('our_team') }}</p>
  <I18nLink to="/">Index</I18nLink>
</template>
