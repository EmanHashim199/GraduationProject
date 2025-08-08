<template>
  <Container>
    <div class="text-center mb-12">
      <h2 class="text-[4rem] font-semibold pb-10 text-black uppercase">WHAT WE DO</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ServiceCard v-for="service in services" :key="service.title" :title="service.title"
        :description="service.description" />
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue'
import ServiceCard from '@/components/base/ServiceCard.vue'

const services = [
  {
    title: "Custom Tailoring",
    description: "Get perfectly fitted garments tailored just for you."
  },
  {
    title: "Repairs",
    description: "Revive and extend the life of your favorite clothes, bags, and shoes"
  },
  {
    title: "Sewing Courses",
    description: "Learn sewing with beginner-friendly courses taught by professionals."
  }
]
</script>
