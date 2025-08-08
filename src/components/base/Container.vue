<template>
  <section class="py-[3rem] mx-auto">
    <div :class="parentClass" class="container-graduation !mx-auto">
      <slot ></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
 defineProps<{
  parentClass?: string;
}>();
</script>

<style scoped>
.container-graduation {
  width: 100%;
  padding: 0 1rem;
}
@media (min-width: 640px) {
  .container-graduation {
    max-width: 620px;
  }
}
@media (min-width: 768px) {
  .container-graduation {
    max-width: 1400px;
  }
}
</style>
