<template>
  <div
    class="relative h-screen w-full bg-no-repeat bg-cover bg-bottom bg-[url('https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im05826-1-bmw-x5.jpg')]"
  >
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">Find Your Car</h1>
        <CarSearchBar />
      </div>
    </div>
    <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
</template>
