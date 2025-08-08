<template>
  <Container>
    <div class="text-center mb-12">
      <h2 class="text-[4rem] font-semibold text-black uppercase ">WHY CHOOSE US</h2>
    </div>

    <div class="">
      <!-- Benefits List -->
      <div class="space-y-4 mb-8 py-10">
        <div v-for="benefit in benefits" :key="benefit" class="flex items-center space-x-3  ">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-black text-[2.5rem] font-semibold">{{ benefit }}</span>
        </div>
      </div>

      <!-- Call-to-Action Buttons -->
      <div class="flex justify-between flex-col sm:flex-row gap-4 ">
        <button class="bg-yellow-400 lg:min-w-[32.375rem] text-[3rem] text-black font-bold py-3 px-6 rounded-[20px] hover:bg-yellow-500 transition-colors">
          See Our Services
        </button>
        <button class="bg-yellow-400 lg:min-w-[32.375rem] text-[3rem] text-black font-bold py-3 px-6 rounded-[20px] hover:bg-yellow-500 transition-colors">
          Start Learning Today
        </button>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue'

const benefits = [
  "Expert tailors",
  "Fast & reliable repairs",
  "Learn from certified instructors",
  "Eco-friendly values (repair > replace)"
]
</script>
