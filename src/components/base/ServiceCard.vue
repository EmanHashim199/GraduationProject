<template>
    <div class="bg-[#FEEFD6] min-h-[31.875rem] rounded-lg py-2 px-8 text-center">
        <div class="flex justify-center mb-4">
            <iconStar/>
        </div>
        <h3 class="text-[2.436rem] py-10 font-bold text-black mb-4">{{ title }}</h3>
        <p class="text-black text-[1.998rem] pt-10 text-2xl text-left font-semibold px-4">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import iconStar from "@/components/icons/Star.vue"
defineProps<{
    title: string;
    description: string;
}>();
</script>
