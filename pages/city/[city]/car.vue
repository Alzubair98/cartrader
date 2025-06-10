<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { toTitleCase } = useUtilities();
useHead({
  title:
    `${useRoute().params.make ? toTitleCase(useRoute().params.make) : "Cars"}` +
    " in " +
    toTitleCase(useRoute().params.city),
});

definePageMeta({
  layout: "custom",
});
</script>
