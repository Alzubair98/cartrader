<script setup lang="ts">
// Fetch meme list from Imgflip API
const { data, error } = await useFetch("https://api.imgflip.com/get_memes");

// Pick a random meme
const memeUrl = computed(() => {
  if (data.value?.success) {
    const memes = data.value.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    return randomMeme.url;
  }
  return "/images/404-fallback.jpg"; // Optional fallback
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center"
  >
    <h1 class="text-8xl font-extrabold text-red-500 mb-4">404</h1>
    <h2 class="text-3xl font-semibold mb-2">Uh-oh... Page not found 🤷‍♂️</h2>
    <p class="text-gray-300 text-lg mb-6">
      We tried to find it... but it vanished like your last commit 😅
    </p>

    <!-- Random Meme Image -->
    <img
      :src="memeUrl"
      alt="Random Meme"
      class="w-full max-w-md rounded-xl shadow-lg mb-6 border-4 border-white"
    />

    <!-- Funny Quote -->
    <blockquote class="italic text-sm text-gray-400 mb-8">
      “Well, that didn’t go as planned...” – Every developer ever
    </blockquote>

    <NuxtLink
      to="/"
      class="inline-block px-6 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
    >
      🔙 Take Me Home
    </NuxtLink>
  </div>
</template>
