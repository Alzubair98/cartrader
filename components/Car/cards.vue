<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @favor="handleFavorite"
        :favored="car.id in favorite"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cars: Array,
});

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id: number) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>
