<template>
  <div v-if="car">
    <car-details-hero :car="car" />

    <car-details-attributes :features="car.features" />

    <car-details-description :desc="car.description" />

    <car-details-contact />
  </div>
</template>

<script setup lang="ts">
const { toTitleCase } = useUtilities();
const route = useRoute();
const { cars } = useCars();

// find the car by id
const car = computed(() => {
  return cars.find((c) => c.id === parseInt(route.params.id as string));
});

useHead({
  title: toTitleCase(`${route.params.name}`),
});

definePageMeta({
  layout: "custom",
});
</script>
