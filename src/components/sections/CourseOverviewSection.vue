<template>
    <Container>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Left Column - Course Information -->
        <div class="space-y-12  " :class="[order]">
          <!-- Course Duration -->
          <div v-if="courseDuration">
            <h2 class="text-3xl font-bold text-yellow-500 !mb-6">{{ courseDuration.title }}</h2>
            <ul class="space-y-3 text-gray-700">
              <li v-for="item in courseDuration.items" :key="item" class="flex items-start">
                <span class="w-2 h-2 bg-yellow-500 rounded-full !mt-2 !mr-4 flex-shrink-0"></span>
                <span class="text-xl font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Who Is This Course For -->
          <div v-if="targetAudience">
            <h2 class="text-3xl  font-bold text-yellow-500 !my-6">{{ targetAudience.title }}</h2>
            <ul class="space-y-3 text-gray-700">
              <li v-for="item in targetAudience.items" :key="item" class="flex items-start">
                <span class="w-2 h-2 bg-yellow-500 rounded-full !mt-2 !mr-4 flex-shrink-0"></span>
                <span class="text-xl font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Additional Content Slot -->
          <slot></slot>
        </div>

        <!-- Right Column - Image -->
        <div :class="['relative']">
          <img :src="img" :alt="imageAlt || 'Course related image'"
            class="w-full h-96 md:h-[500px] object-cover rounded-lg" />
        </div>
      </div>
    </Container>
</template>

<script setup lang="ts">
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

import Container from '@/components/base/Container.vue'
</script>
