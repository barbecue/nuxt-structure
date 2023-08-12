<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <nuxt-img
      draggable="false"
      src="/assets/images/hero-gradient.svg"
      class="absolute right-0 top-0 hidden select-none overflow-hidden blur-lg lg:block"
      alt=""
      width="1269"
      height="724"
    />
    <nuxt-img
      draggable="false"
      src="/assets/images/hero-gradient-tablet.svg"
      alt=""
      class="absolute right-0 top-0 hidden w-full select-none overflow-hidden blur-md sm:block lg:hidden"
      width="924"
      height="653"
    />
    <nuxt-img
      draggable="false"
      src="/assets/images/hero-gradient-mobile.svg"
      class="absolute inset-x-0 top-0 w-full select-none overflow-hidden object-cover blur-md sm:hidden"
      alt=""
      width="375"
      height="494"
    />
    <div class="z-20 flex flex-col gap-3">
      <h1 class="z-10 text-3xl font-semibold md:text-5xl">
        <span class="text-primary">Nuxt 3</span> +
        <span class="text-cyan-400">Tailwind CSS</span>
      </h1>
      <nuxt-link
        to="https://github.com/barbecue/nuxt-structure#readme"
        class="rounded bg-gradient-to-r from-primary to-cyan-500 px-4 py-2 font-semibold text-background transition duration-300 hover:drop-shadow-primary"
      >
        Get Started
      </nuxt-link>
      <span class="text-sm"
        >made by <nuxt-link to="https://github.com/barbecue" class="text-primary">@barbecue</nuxt-link> with
        <Icon name="material-symbols:favorite-rounded" class="h-4 w-4 text-primary"
      /></span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
