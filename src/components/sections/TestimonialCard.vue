<template>
    <div class="bg-[#F5F5DC] rounded-lg p-6 shadow-md">
        <!-- Quote -->
        <div class="mb-4">
            <p class="text-gray-700 text-lg leading-relaxed italic">
                "{{ quote }}"
            </p>
        </div>

        <!-- Customer Info -->
        <div class="flex items-center !mt-2">
            <!-- Avatar -->
            <div class="w-12 h-12 rounded-full overflow-hidden !mr-4">
                <img :src="avatar" :alt="name" class="w-full h-full object-cover" />
            </div>

            <!-- Name -->
            <div>
                <p class="font-semibold text-gray-800">{{ name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    quote: string;
    avatar: string;
    name: string;
}>()
</script>
