<template>
  <div class="about !w-full ">
    <Hero />
    <WhatWeDo />

  </div>
</template>
<script setup lang="ts">
import Hero from '@/components/ui/about/Hero.vue';
import WhatWeDo from '@/components/ui/about/WhatWeDo.vue'

</script>
<style>
  .about {
    min-height: 100vh;
  }
</style>
