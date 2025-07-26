<template>
  <carCards v-if="cars.length" :cars="cars" />
  <div v-else>
    <h1 class="text-red-600 text-2xl">No Cars Found With Filters</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const maxPrice = computed(() => route.query.maxPrice);
const minPirce = computed(() => route.query.minPirce);

const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPirce,
  maxPrice,
  make: route.params.make,
});

watch(
  () => [
    route.query.minPirce,
    route.query.maxPrice,
    route.query.make,
    route.params.city,
  ],
  () => refresh()
);
</script>
