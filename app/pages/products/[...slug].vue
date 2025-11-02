<script setup>
const { $t, $defineI18nRoute, $setI18nRouteParams } = useNuxtApp();
definePageMeta({ name: 'product' });

const route = useRoute();
const slug = route.params.slug;
const { data: product, error } = await useFetch(`/api/products/${slug}`);
if (error.value) throw createError({
  statusCode: error.value?.statusCode,
  statusMessage: error.value?.statusMessage,
  fatal: true
});

$setI18nRouteParams({
  en: { slug: product.value.url },
  fr: { slug: product.value.url }
});

$defineI18nRoute({
  locales: {
    en: {
      about_us: "About us",
      all_products: "All products",
      price: "Price"
    },
    fr: {
      about_us: "À propos",
      all_products: "Tous les produits",
      price: "Prix"
    }
  }
});
</script>

<template>
  <h1>
    {{ product.title }}
  </h1>

  <p><strong>{{ $t('price') }}: {{ product.price }}</strong></p>
  <p>{{ product.description }}</p>
  <I18nLink to="/">Home</I18nLink><br>

  <I18nLink :to="{ name: 'products' }">
      {{ $t('all_products') }}
  </I18nLink>
</template>
