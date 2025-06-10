<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
  >
    <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by City ..."
      v-model="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
      Search
    </button>
  </div>
</template>

<script setup lang="ts">
const city = ref<string>("");
const router = useRouter();

const handleSearch = () => {
  if (city.value.trim() === "") {
    alert("Please enter a city name.");
    return;
  }
  // Navigate to the city page with the entered city name
  router.push(`/city/${city.value}/car`);
};
</script>
