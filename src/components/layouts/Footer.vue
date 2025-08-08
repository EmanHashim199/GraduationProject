<template>
  <footer class="lg:pt-[20rem] pt-[15rem]">
    <!-- Banner Section with Icons and CTA -->

    <!-- Footer Content -->
    <div class="bg-[linear-gradient(281.91deg,_#0F0E0E_20.11%,_#381D11_67.04%,_#6A4434_98.32%)] relative">
      <section class="   absolute -top-[20rem] right-[50%] translate-x-[50%] w-[90%] lg:w-[80%]">
        <!-- Icons row on white background -->
        <div class=" relative">
          <div
            class=" xl:w-[80%]  lg:w-[calc(100%-80px)] w-[calc(100%-60px)] !mx-auto translate-y-[8rem] bg-white !py-[3rem]">
            <div class=" grid lg:grid-cols-4 grid-cols-2 items-center justify-center lg:gap-12 text-4xl lg:!text-[3rem]  !p-5">
              <!-- Scissors icon -->
              <IconTooling class="flex justify-center items-center" />
              <!-- Sewing machine icon -->
              <IconEcosystem class="flex justify-center items-center" />
              <!-- Shoe icon -->
              <IconDocumentation class="flex justify-center items-center" />
              <!-- People icon -->
              <IconCommunity class="flex justify-center items-center" />
            </div>
          </div>
        </div>

        <!-- Brown banner with headline and CTA -->
        <Container parent-class="bg-[#56372A] relative shadow-2xl">
          <!-- corner tabs -->
          <span
            class="absolute top-0 left-0 w-[60px] lg:w-[80px] h-[150px] lg:h-[50px] bg-[#56372A] -translate-y-full"></span>
          <span
            class="absolute top-0 right-0 w-[60px] lg:w-[80px] h-[150px] lg:h-[50px] bg-[#56372A] -translate-y-full"></span>
          <div class="container mx-auto px-4 py-10">
            <div class="text-white lg:w-[94%] !mx-auto text-center flex flex-col items-start  ">
              <h2 class="text-xl pt-7 pb-10 lg:text-[3rem] px-0 font-extrabold tracking-wider uppercase mb-6">
                DRESS YOUR BEST, LEAVE OUT THE REST!
              </h2>
              <button class="bg-[#F3D04E] !me-auto text-black font-medium py-3 px-6  hover:opacity-90 transition">
                CONTACT US
              </button>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-[20rem]">
          <!-- INFORMATION Column -->
          <div>
            <h3 class="text-white text-2xl font-bold uppercase !mb-6">INFORMATION</h3>
            <p class="text-white text-sm mb-6">
              We specialize in custom-made fashion for men and women. From repairing your favorite bag or
              shoes to tailoring your dream outfit - we've got you covered.
            </p>
            <!-- Social Media Icons -->
            <div class="flex gap-3 !mt-10">
              <Facebook />
              <Instagram />
              <LinkedIn />
              <Twitter />
            </div>
          </div>

          <!-- NAVIGATION Column -->
          <div>
            <h3 class="text-white font-bold uppercase !mb-4">NAVIGATION</h3>
            <ul class="flex flex-col gap-4">
              <li class="flex items-center gap-2">
                <IconArrow />
                <RouterLink to="/" class="text-white hover:text-gray-300">Homepage</RouterLink>
              </li>
              <li class="flex items-center gap-2">
                <IconArrow />
                <RouterLink to="/about" class="text-white hover:text-gray-300">About Us</RouterLink>
              </li>
              <li class="flex items-center gap-2">
                <IconArrow />
                <RouterLink to="/services" class="text-white hover:text-gray-300">Services</RouterLink>
              </li>
              <li class="flex items-center gap-2">
                <IconArrow />
                <RouterLink to="/projects" class="text-white hover:text-gray-300">Project</RouterLink>
              </li>
            </ul>
          </div>

          <!-- CONTACT US Column -->
          <div>
            <h3 class="text-white font-bold uppercase mb-4">CONTACT US</h3>
            <div class=" mb-6">
              <div class="flex items-center gap-2 !my-4">
                <svg class="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-white text-sm">Where elegance begins - Egypt</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-white text-sm">support@fitcouture.com</span>
              </div>
            </div>
            <!-- Email Subscription -->
            <div class="">
              <input type="email" placeholder="Email Address"
                class="w-full bg-white text-black px-3 py-4  !my-4 text-sm  border-gray-400 " />
              <button class="bg-[#F3D04E] text-black font-medium py-2 px-4  hover:opacity-90 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <!-- Lower Footer -->
    <Container
      class="bg-[linear-gradient(281.91deg,_#0F0E0E_20.11%,_#381D11_67.04%,_#6A4434_98.32%)] !py-0 border-t border-gray-600">
      <div class="container mx-auto py-4">
        <div class="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>ALLRIGHT RESERVED - FIT</div>
          <div class="flex gap-4 mt-2 md:mt-0">
            <a href="#" class="hover:text-white">DISCLAIMER</a>
            <span>|</span>
            <a href="#" class="hover:text-white">PRIVACY POLICY</a>
            <span>|</span>
            <a href="#" class="hover:text-white">TERM OF USE</a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Container from '../base/Container.vue';
import IconTooling from '@/components/icons/IconTooling.vue'
import IconEcosystem from '@/components/icons/IconEcosystem.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'
import IconCommunity from '@/components/icons/IconCommunity.vue'
import IconArrow from "@/components/icons/Arrow.vue"
import Facebook from '../icons/Facebook.vue';
import Twitter from '../icons/Twitter.vue';
import Instagram from '../icons/Instagram.vue';
import LinkedIn from '../icons/LinkedIn.vue';
</script>

<style scoped>
/* additional footer styles can go here if needed */
</style>
