<template>
  <Container class="relative">
    <!-- Background Image -->
    <div class="relative  overflow-hidden">
      <img src="@/assets/fabric-banner.jpg" alt="Draped fabric" class="w-full aspect-[2.123] object-cover" />
      <!-- Overlay -->

      <!-- Content Overlay -->
      <div class="md:absolute  inset-0 flex flex-col md:items-center justify-between">
        <h1 class="text-4xl  md:text-5xl font-bold md:text-white !mt-6 capitalize">
          Italian Pattern course
        </h1>


        <p class="md:text-[#FEDC7C]   md:!text-center md:w-[90%] !mx-auto pb-10 text-lg md:text-xl leading-relaxed ">
          To teach students the fundamental and advanced techniques of Italian-style pattern drafting and garment
          construction, with a focus on precision and couture-level quality.
        </p>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '../base/Container.vue';

// Component logic can be added here
</script>
