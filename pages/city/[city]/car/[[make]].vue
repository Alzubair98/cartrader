<template>
  <carCards :cars="cars" />
</template>

<script setup>
const route = useRoute();
const cars = await useFetchCars(route.params.city, {
  minPirce: route.query.minPirce,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});
</script>
