<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select
      v-model="state"
      name=""
      id=""
      class="p-2 border w-100 rounded"
      @change="onChange"
    >
      <option v-for="option in options" :key="option.id" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  options: Array,
  name: String,
});

const state = ref("");

const emits = defineEmits(["changeInput"]);

const onChange = () => {
  emits("changeInput", state.value, props.name);
};
</script>
