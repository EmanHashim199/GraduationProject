<template>
  <Container>
    <!-- Icons row on white background -->
    <div class="bg-white">
      <Container>
        <div class="flex items-center justify-evenly gap-12 py-6 px-5">
          <!-- Reuse existing app icons as placeholders -->
          <IconTooling  />
          <IconEcosystem  />
          <IconDocumentation  />
          <IconCommunity  />
        </div>
      </Container>
    </div>

    <div class="bg-[#5B3A2E]">
      <div class="relative">
        <!-- corner tabs -->
        <span class="tab-left"></span>
        <span class="tab-right"></span>
        <Container>
          <div class="text-white py-10">
            <h2 class="text-center md:text-left text-2xl md:text-4xl font-extrabold tracking-wider uppercase">
              DRESS YOUR BEST, LEAVE OUT THE REST!
            </h2>
            <div class="mt-8">
              <button class="bg-[#F1BD29] text-black font-bold py-3 px-6 rounded hover:opacity-90 transition">
                CONTACT US
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/base/Container.vue'
import IconTooling from '@/components/icons/IconTooling.vue'
import IconEcosystem from '@/components/icons/IconEcosystem.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'
import IconCommunity from '@/components/icons/IconCommunity.vue'
</script>

<style scoped>
/* small brown tabs protruding upward at left and right */
.tab-left,
.tab-right {
  position: absolute;
  top: 0;
  width: 42px;
  height: 26px;
  background: #5B3A2E;
  transform: translateY(-100%);
}
.tab-left { left: 0; }
.tab-right { right: 0; }
</style>
