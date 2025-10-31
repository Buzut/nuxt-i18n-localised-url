<script setup>
const { $t, $switchLocalePath, $switchLocaleRoute, $switchRoute, $setI18nRouteParams, $getLocales } = useI18n();
</script>

<template>
  <ul>
    <li v-for="curloc in $getLocales()" :key="curloc.code" :class="curloc.code">
      <a :href="$switchLocalePath(curloc.code)">
        {{ curloc.name }}
      </a>
    </li>
  </ul>
</template>
