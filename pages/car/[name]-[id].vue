<template>
  <car-details-hero />

  <car-details-attributes />

  <car-details-description />

  <car-details-contact />
</template>

<script setup lang="ts">
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(`${useRoute().params.name}`),
});

definePageMeta({
  layout: "custom",
});
</script>
