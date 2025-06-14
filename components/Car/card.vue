<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <div class="flex h-full">
      <img :src="car.url" alt="none" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
          <p class="text-gray-700">
            {{ car.description }}
          </p>
          <h1 class="mt-auto text-xl">{{ car.price }}$</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

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
