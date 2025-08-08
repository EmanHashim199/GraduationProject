<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/layouts/MainNavbar.vue'
</script>

<template>
  <div class="bg-white">
    <MainNavbar />
    <RouterView />
  </div>
</template>

<style scoped></style>
