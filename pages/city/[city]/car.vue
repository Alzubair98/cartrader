<template>
  <div class="mt-32 flex">
    <NuxtErrorBoundary>
      <CarSideBar />
      <NuxtPage />
      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600 mb-4">
            Sorry, something went wrong
          </h1>
          <code>{{ error }}</code>
          <button
            @click="error.value = null"
            class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
          >
            Go Back
          </button>
        </div>
      </template>
    </NuxtErrorBoundary>
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
