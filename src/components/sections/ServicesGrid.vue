<template>
  <Container parent-class="lg:!w-[85%]">
    <Container>
      <div class="grid grid-cols-1  gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.serviceType"
          :title="service.title"
          :image="service.image"
          :service-type="service.serviceType"
          @request-repair="handleRequestRepair"
        />
      </div>
    </Container>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue'
import ServiceCard from '@/components/sections/ServiceCard.vue'

interface Service {
  title: string;
  image: string;
  serviceType: string;
}

defineProps<{
  services: Service[];
}>()

const emit = defineEmits<{
  requestRepair: [serviceType: string];
}>()

const handleRequestRepair = (serviceType: string) => {
  emit('requestRepair', serviceType)
}
</script>
