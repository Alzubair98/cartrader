<template>
  <header
    class="sticky top-0 z-50 bg-violet-200 flex justify-between items-center space-x-1 p-4 shadow-md"
  >
    <NuxtLink to="/" class="text-3xl font-mono">Car Trader</NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink to="/profile/listings" class="mr-5">Profile</NuxtLink>
      <p class="cursor-pointer" @click="logout">Logout</p>
    </div>
    <NuxtLink v-else to="/login" class="text-2xl font-mono">Login</NuxtLink>
  </header>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = () => {
  // 1) make user.value = null
  // 2) remove the JWT from Cookie browser
  const { error } = supabase.auth.signOut();
  if (error) {
    console.log(error);
    return;
  }
  // 3) send the user to the home page
  navigateTo("/");
};
</script>
