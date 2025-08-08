<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <RepairHero />

    <!-- Services Grid -->
    <ServicesGrid :services="repairServices" @request-repair="handleRequestRepair" />

    <!-- Testimonials Section -->
    <TestimonialsSection :testimonials="customerTestimonials" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import RepairHero from '@/components/sections/RepairHero.vue'
import ServicesGrid from '@/components/sections/ServicesGrid.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import services from "@/assets/services.jpg"
import services2 from "@/assets/services2.jpg"
import services3 from "@/assets/services3.jpg"
import services4 from "@/assets/services4.jpg"
import avatart1 from "@/assets/avatar1.jpg"
import avatart2 from "@/assets/avatar2.jpg"
import avatart3 from "@/assets/avatar3.jpg"

// Repair Services Data
const repairServices = ref([
  {
    title: 'Clothes Alteration',
    image: services,
    serviceType: 'clothes-alteration'
  },
  {
    title: 'Shoe Sole Repair',
    image: services2,
    serviceType: 'shoe-repair'
  },
  {
    title: 'Bags Fixing',
    image: services3,
    serviceType: 'bags-fixing'
  },
  {
    title: 'Bags Fixing',
    image: services4,
    serviceType: 'leather-conditioning'
  }
])

// Customer Testimonials Data
const customerTestimonials = ref([
  {
    quote: "I thought my favorite bag was ruined, but they brought it back to life! The stitching and repair are perfect.",
    avatar: avatart1,
    name: 'J. K. Kim'
  },
  {
    quote: "The sole of my leather shoes were almost gone, but they repaired it professionally. Great service and fast delivery!",
    avatar: avatart2,
    name: 'Michael T.'
  },
  {
    quote: "I was nervous and unsure how to send my old items, but the process was smooth and seamless. Great!",
    avatar: avatart3,
    name: 'Ray M. S.'
  }
])

// Handle repair request
const handleRequestRepair = (serviceType: string) => {
  console.log(`Requesting repair for: ${serviceType}`)
  // Add your logic here - could navigate to a form, open modal, etc.
  alert(`Requesting repair for: ${serviceType}`)
}
</script>
