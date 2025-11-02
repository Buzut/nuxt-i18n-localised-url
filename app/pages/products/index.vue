<script setup>
const { $t, $defineI18nRoute, $getLocale } = useNuxtApp();

const { data: products, error } = await useFetch('/api/products');
if (error.value) throw createError({
  statusCode: error.value?.statusCode,
  statusMessage: error.value?.statusMessage,
  fatal: true
});

$defineI18nRoute({
  locales: {
    en: {
      title: "Our Product Range",
      about_us: "About us",
      description: "Discover our collection of high-quality products designed to meet your needs and exceed your expectations."
    },
    fr: {
      title: "Notre Gamme de Produits",
      about_us: "À propos",
      description: "Découvrez notre collection de produits de haute qualité conçus pour répondre à vos besoins et dépasser vos attentes."
    }
  },
  localeRoutes: {
    en: '/our-products',
    fr: '/nos-produits',
  }
});
</script>

<template>
  <ul>
    <li v-for="product in products[$getLocale()]" :key="product.id">
      <I18nLink :to="{ name: 'product', params: { slug: product.url } }">
        {{ product.title }} – {{ product.price }}
      </I18nLink>
    </li>
  </ul>

  <I18nLink to="/">Home</I18nLink><br>
  <I18nLink :to="{ name: 'about-us' }">{{ $t('about_us') }}</I18nLink>
</template>
