<template>
    <div class="relative group overflow-hidden rounded-lg shadow-lg">
        <!-- Background Image -->
        <div class="relative">
            <img :src="image" :alt="title"
                class="w-full aspect-[1.41] object-cover transition-transform duration-300 group-hover:scale-105" />
            <!-- Dark overlay for text readability -->
            <div class="absolute inset-0 bg-[#0000002a]"></div>
        </div>

        <!-- Content Overlay -->
        <div class="absolute inset-0 pb-10 flex flex-col justify-between">
            <!-- Title -->
            <div class="text-center">
                <h3 class="text-white bg-[#00000070] text-2xl md:text-3xl font-bold !py-7 mb-4">
                    {{ title }}
                </h3>
            </div>

            <!-- CTA Button -->
            <div class="text-center">
                <button @click="$emit('requestRepair', serviceType)"
                    class="bg-yellow-400 text-black font-bold py-3 px-16 rounded-full hover:bg-yellow-500 transition-colors duration-200 transform hover:scale-105">
                    Request Repair
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    image: string;
    serviceType: string;
}>()

defineEmits<{
    requestRepair: [serviceType: string];
}>()
</script>
