<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        type="text"
        class="border border-gray-300 rounded p-1"
        placeholder="Name"
      />
      <input
        type="text"
        class="border p-1 border-gray-300 rounded"
        placeholder="Email"
      />
      <input
        type="text"
        class="border p-1 border-gray-300 rounded"
        placeholder="Phone"
      />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        class="border p-1 border-gray-300 rounded w-full"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4 cursor-pointer"
    >
      Submit
    </button>
  </div>
</template>
