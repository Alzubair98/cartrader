<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
      >
        <input type="text" class="border p-1 rounded" v-model="city" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize">Toyto</h3>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize"></h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const modal = ref({
  make: false,
  location: false,
  price: false,
});

const city = ref("");

// types
type ModalKey = "make" | "location" | "price";

// functions
const updateModal = (type: ModalKey) => {
  modal.value[type] = !modal.value[type];
};

const onChangeLocation = () => {
  if (city.value) {
    if (isNaN(parseInt(city.value))) {
      updateModal("location");
      navigateTo(`/city/${city.value}/car/${route.params.make}`, {
        replace: true,
      });
      city.value = "";
    } else {
      throw createError({
        statusCode: 400,
        message: "City name cannot be a number",
      });
    }
  } else {
    return;
  }
};
</script>
