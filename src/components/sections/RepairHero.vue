<template>
    <Container class="relative">
        <div class="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
            <img src="@/assets/hero.jpg" alt="Leather working tools and materials"
                class="w-full h-full object-cover " />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-[#00000046]"></div>

            <!-- Content Overlay -->
            <div class="absolute inset-0 flex items-center">
                <div class="container mx-auto px-4">
                    <div class="max-w-2xl ml-auto">
                        <h1 class="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                            Repair Your Favorite Items
                        </h1>
                        <p class="text-white text-lg md:text-xl leading-relaxed">
                            bags, shoes, clothes, accessories
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup lang="ts">
import Container from '../base/Container.vue';

// Component logic can be added here
</script>
