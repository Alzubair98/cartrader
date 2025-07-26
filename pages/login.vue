<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Log in</h1>

    <button
      @click="login"
      class="p-3 text-white font-bold rounded-xl bg-red-400 cursor-pointer"
    >
      Login with Google
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

// add supabase
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    console.log(error);
  }
};
</script>
