<template>
  <section class="py-16">
    <div class="text-center !mb-12">
      <div class="bg-gray-200 py-4 !mb-8">
        <h2 class="text-3xl font-bold text-gray-800">
          What People Say About Us
        </h2>
      </div>
    </div>

    <Container>
      <!-- Header -->

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.name" :quote="testimonial.quote"
          :avatar="testimonial.avatar" :name="testimonial.name" />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue'
import TestimonialCard from '@/components/sections/TestimonialCard.vue'

interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
}

defineProps<{
  testimonials: Testimonial[];
}>()
</script>
