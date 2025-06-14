<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  desc: string;
}>();
</script>
