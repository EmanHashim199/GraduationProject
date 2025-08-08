<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <CourseHeader />

    <!-- Course Overview Section -->
    <CourseOverviewSection v-for="section in courseSections" :key="section.order" :img="section.img"
      :order="section.order" :image-alt="section.imageAlt" :course-duration="section.courseDuration"
      :target-audience="section.targetAudience" />



    <!-- Call to Action Section -->
    <CourseCTA />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/components/base/Container.vue'
import CourseHeader from '@/components/sections/CourseHeader.vue'
import CourseOverviewSection from '@/components/sections/CourseOverviewSection.vue'
import CourseCTA from '@/components/sections/CourseCTA.vue'
import img1 from "@/assets/sewing-machine-person.jpg"
import img2 from "@/assets/sewing-hands.jpg"
interface CourseDuration {
  title: string;
  items: string[];
}

interface TargetAudience {
  title: string;
  items: string[];
}

defineProps<{
  img: string;
  order?: string;
  imageAlt?: string;
  courseDuration?: CourseDuration;
  targetAudience?: TargetAudience;
}>()

// Sample data structure for the course sections
const courseSections = ref([
  {
    order: 'md:!order-0 order-2',
    img: img1,
    imageAlt: 'Person operating Singer sewing machine',
    courseDuration: {
      title: 'Course Duration:',
      items: [
        'Short Course: 1-3 months',
        'Diploma Program: 6-13 months',
        'Intensive Course: 2-4 Weeks (daily sessions)'
      ]
    },
    targetAudience: {
      title: 'Who Is This Course For:',
      items: [
        'Fashion design students',
        'Tailors and seamstresses',
        'Aspiring designers',
        'Anyone interested in garment construction and design'
      ]
    }
  },
  {
    order: 'order-2',
    img: img2,
    imageAlt: 'Hands working on sewing machine',
    courseDuration: {
      title: 'Key modules:',
      items: [
        'Introduction to pattern making',
        'Body measurements',
        'Basic blocks (slopers)',
        "Pattern drafting techniques",
        'Garment constructions',
        'Advanced pattern making',
        'Fashion design integration'
      ]
    },
    targetAudience: {
      title: 'Delivery Methods :',
      items: [
        'Delivery Methods :',
        'Offline (with video lessons, live sessions',
        'and assignments'
      ]
    }
  }
])
</script>
