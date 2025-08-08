<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/layouts/MainNavbar.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <div class="">
    <MainNavbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
