<template>
  <div v-if="car">
    <car-details-hero :car="car" />

    <car-details-attributes :features="car.features" />

    <car-details-description :desc="car.description" />

    <car-details-contact />
  </div>
</template>

<script setup lang="ts">
// define items
const { toTitleCase } = useUtilities();
const route = useRoute();

const { data: car } = await useFetchCar(route.params.id);

useHead({
  title: toTitleCase(`${route.params.name}`),
});

definePageMeta({
  layout: "custom",
});
</script>
