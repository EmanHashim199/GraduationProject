<template>

  <Container class="bg-gray-100 !mb-10">
    <div class="max-w-4xl !mx-auto text-center">
      <!-- Learning Outcome -->
      <div class="!mb-12">
        <h2 class="text-3xl font-bold text-yellow-500 !mb-8">Learning Outcome:</h2>
        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl !mx-auto">
          By the end in this course students will be able to Draft professional quality pattern using Italian methods,
          Modify pattern to create custom design, Apply fitting and finishing technique and work with clients and
          design for collections
        </p>
      </div>

      <!-- Call to Action -->
      <div class="bg-white p-10 rounded-lg shadow-lg max-w-2xl !mx-auto">
        <p class="text-2xl text-gray-700 !mb-8">
          Join our course for just
          <span class="text-yellow-500 font-bold">2000 <span class="text-gray-700">EGP!</span></span>
        </p>
        <RouterLink to="/registration"
          class="inline-block bg-[#5D3500] text-white font-bold py-4 px-10 rounded-lg hover:bg-[#4A2A00] transition-colors text-lg uppercase">
          start enrolling now
        </RouterLink>
      </div>
    </div>
  </Container>

</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue'
import { RouterLink } from 'vue-router'
</script>
