<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title:
    `${useRoute().params.make ? useRoute().params.make : "Cars"}` +
    " in " +
    useRoute().params.city,
});

definePageMeta({
  layout: "custom",
});
</script>
