<template>
  <section >
    <div class="grid mx-auto grid-cols-2 gap-8 !mt-10 items-center">
      <div class="lg:ps-20 ps-2">
        <h1 class="lg:text-[4rem] text-xl font-bold !mb-3">WHO WE ARE</h1>
        <p class="lg:text-[1.976rem] font-semibold">
          Crafting, Repairing &amp; Teaching one stitch at a time.
        </p>
      </div>
      <div>
        <img src="@/assets/about-us.jpg" alt="Tailor at work" class="w-full  shadow-lg object-cover" />
      </div>
    </div>

    <Container class="bg-[#FEEFD6] !mt-12 p-8 lg:px-16 rounded-lg !font-medium ">
      <h3 class="lg:text-[2.5rem] text-3xl font-bold !mb-4 text-center">ABOUT OUR BRAND</h3>
      <p class=" mb-4 lg:text-[1.5rem]">
        We are a modern tailoring brand that brings fashion, function, and learning together.
        Our team of experienced tailors, repair specialists, and sewing instructors is dedicated to helping you:
      </p>
      <ul class="list-disc lg:text-[1.5rem] list-inside space-y-2 text-gray-800">
        <li>Wear clothes that truly fit.</li>
        <li>Restore your favorite garments.</li>
        <li>Learn to sew your own style.</li>
      </ul>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue';

</script>

<style scoped>
</style>
