<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error?.statusCode }}</h1>
    <p class="text-4xl mt-7">{{ error?.message }}</p>
    <button
      @click="handleError"
      class="rounded cursor-pointer mt-7 text-2xl bg-blue-400 px-7 py-4 text-white"
    >
      Go Back
    </button>
  </div>
</template>

<script setup lang="ts">
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>
