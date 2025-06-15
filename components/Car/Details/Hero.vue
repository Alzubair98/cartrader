<template>
  <!-- Car Hero-->
  <div>
    <div class="mt-10">
      <NuxtImg :src="car.url" class="w-full" alt="Car Image" />
      <h1 class="mt-10 text-xl">{{ car.name }}</h1>
      <div
        class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between"
      >
        <div class="flex">
          <p class="mr-2">{{ car.seats }} Seats</p>
          <p class="mr-2">| {{ car.miles }} miles</p>
        </div>
        <div>
          <p class="font-bold text-2xl">{{ car.price }}$</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Car Hero-->
</template>

<script setup lang="ts">
const props = defineProps<{
  car: {
    id: number;
    name: string;
    price: string;
    url: string;
    seats: number;
    miles: string;
    features: string[];
    description: string;
  };
}>();
</script>
