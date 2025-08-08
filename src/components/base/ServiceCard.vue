<template>
    <div class="bg-[#FEEFD6]  rounded-lg py-2 px-4 text-center">
        <div class="flex justify-center mb-4">
            <iconStar/>
        </div>
        <h3 class="lg:text-[2.436rem] text-3xl py-10 font-bold text-black mb-4">{{ title }}</h3>
        <p class="text-black lg:text-[1.5rem]  py-10 text-xl text-left font-semibold px-4">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import iconStar from "@/components/icons/Star.vue"
defineProps<{
    title: string;
    description: string;
}>();
</script>
