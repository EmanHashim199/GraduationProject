<template>
  <header>
    <!-- Thin top brown stripe -->
    <div class="w-full flex justify-center items-center  bg-[#6B3A1E]">
      <IconHeader class="lg:block hidden" />
      <IconMobileHeader class="block lg:hidden"/>
    </div>

    <!-- Main navigation bar -->
    <nav class="bg-[#F3E6B4]">
      <div class="container !mx-auto px-4 py-4 grid grid-cols-3 items-center">
        <!-- Left: Logo -->
        <div class="flex items-center">
          <RouterLink to="/" class="flex-shrink-0">
            <div class="w-14 h-14 bg-white border border-gray-300 flex items-center justify-center">
              <img src="@/assets/logo.jpg" alt="Logo" class="w-[5.5rem] h-[5.5rem] object-contain" />
            </div>
          </RouterLink>
        </div>

        <!-- Center: Desktop Links -->
        <div class="hidden md:flex justify-center">
          <ul class="flex items-center justify-center gap-10 text-gray-900 font-semibold">
            <li>
              <RouterLink to="/" class="hover:text-[#6B3A1E]">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/products" class="hover:text-[#6B3A1E]">products</RouterLink>
            </li>
            <li>
              <RouterLink to="/about" class="hover:text-[#6B3A1E]">aboutUs</RouterLink>
            </li>
            <li>
              <RouterLink to="/faq" class="hover:text-[#6B3A1E]">FAQ</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Right: Icons + Mobile Toggle -->
        <div class="flex items-center justify-end gap-4">
          <RouterLink to="/login" class="text-black hover:text-[#6B3A1E]">
            <IconUser />
          </RouterLink>

          <RouterLink to="/cart" class="relative text-black hover:text-[#6B3A1E]">
           <IconCart />
            <span v-if="cartCount > 0" class="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {{ cartCount }}
            </span>
          </RouterLink>

          <!-- Mobile menu button -->
          <button @click="isOpen = !isOpen" class="md:hidden text-black hover:text-[#6B3A1E]">
            <IconMenu />
          </button>
        </div>
      </div>

      <!-- Mobile Links -->
      <div v-if="isOpen" class="md:hidden bg-[#F3E6B4] border-t border-amber-200">
        <ul class="px-4 py-3 space-y-2 text-gray-900 font-semibold">
          <li>
            <RouterLink to="/" class="block hover:text-[#6B3A1E]">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/products" class="block hover:text-[#6B3A1E]">products</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="block hover:text-[#6B3A1E]">about us</RouterLink>
          </li>
          <li>
            <RouterLink to="/faq" class="block hover:text-[#6B3A1E]">FAQ</RouterLink>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Thin separator bar under nav -->
    <div class="w-full bg-[#6B3A1E]"></div>

    <!-- Promotional banner -->
    <div class="bg-[#6B3A1E] text-white text-center">
      <div class="container !mx-auto px-4 flex justify-center">
        <span class="lg:text-[14px] text-xs font-bold  tracking-wide uppercase">2-3 ITEMS: -10%, 4+ ITEMS: -20% USE CODE
          :MULTIBUY</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import IconUser from '@/components/icons/User.vue'
import IconCart from "@/components/icons/Cart.vue"
import IconMenu from "@/components/icons/Menu.vue"
import IconHeader from "@/components/icons/Header.vue"
import IconMobileHeader from "@/components/icons/MobileHeader.vue"
// toggle state for mobile menu
const isOpen = ref(false)

// example cart count; replace with your store/state
const cartCount = ref(0)
</script>
