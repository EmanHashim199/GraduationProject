<template>
  <Container class="!pb-2 bg-white">
    <!-- Header Section -->
    <div class="bg-white">
      <div class="container mx-auto px-4 py-8">
        <!-- Header Image -->
        <div class="mb-6">
          <img src="@/assets/thread-spools.jpg" alt="Thread spools"
            class="w-full aspect-[2.2] object-cover rounded-lg" />
        </div>

        <!-- Course Title -->
        <h1 class="text-4xl font-bold text-yellow-500 !mb-2 text-center py-5">Italian Pattern course</h1>
        <p class="text-gray-700 text-xl text-center">To register for the course, which costs 2000 EGP</p>
      </div>
    </div>

    <!-- Enrollment Form -->
    <Container>
      <form class="">
        <!-- Personal Details Section -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-yellow-500 !mb-6">Enroll Now:</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 !mb-4">
            <div>
              <label class="block text-gray-700 font-medium !mb-2">First Name</label>
              <input type="text" placeholder="Write your name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label class="block text-gray-700 font-medium !mb-2">Last Name</label>
              <input type="text" placeholder="Write your name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
          </div>

          <div class="!mb-4">
            <label class="block text-gray-700 font-medium !mb-2">Address</label>
            <input type="text" placeholder="Write your address"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 !mb-4">
            <div>
              <label class="block text-gray-700 font-medium !mb-2">Country</label>
              <select
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option value="egypt" selected>Egypt</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 font-medium !mb-2">Email</label>
              <input type="email" placeholder="Write your email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 font-medium !mb-2">Password</label>
              <div class="relative">
                <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Enter your password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" />
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg v-if="showPassword" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                  <svg v-else class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label class="block text-gray-700 font-medium !mb-2">Password Confirmation</label>
              <div class="relative">
                <input :type="showPasswordConfirm ? 'text' : 'password'" v-model="passwordConfirm"
                  placeholder="Confirm your password"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" />
                <button type="button" @click="showPasswordConfirm = !showPasswordConfirm"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg v-if="showPasswordConfirm" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                  <svg v-else class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Method Section -->
        <div class="!mb-8">
          <h2 class="text-2xl font-bold text-yellow-500 !my-6">Select Payment Method</h2>

          <div class="flex gap-4 mb-6">
            <label class="flex items-center">
              <input type="radio" name="payment" value="credit-card" checked class="!mr-3">
              <span class="text-gray-700 font-medium">Credit Card</span>
            </label>
            <label class="flex items-center">
              <input type="radio" name="payment" value="paypal" class="!mr-3">
              <span class="text-gray-700 font-medium">PayPal</span>
            </label>
            <label class="flex items-center">
              <input type="radio" name="payment" value="in-school" class="!mr-3">
              <span class="text-gray-700 font-medium">In school</span>
            </label>
          </div>

          <!-- Credit Card Details -->
          <div class="bg-gray-50 !mt-5 p-6 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 !mb-4">
              <div>
                <label class="block text-gray-700 font-medium !mb-2">Card Number</label>
                <div class="relative">
                  <input :type="showCardNumber ? 'text' : 'password'" v-model="cardNumber"
                    placeholder="Enter card number"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" />
                  <button type="button" @click="showCardNumber = !showCardNumber"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg v-if="showCardNumber" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                    <svg v-else class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label class="block text-gray-700 font-medium !mb-2">Expiration Date</label>
                <input type="text" placeholder="MM/YY"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-700 font-medium !mb-2">Security Code</label>
                <input type="text" placeholder="CVC"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div>
                <label class="block text-gray-700 font-medium !mb-2">Country</label>
                <select
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option value="egypt" selected>Egypt</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary and Submit -->
        <div class="flex flex-col md:flex-row justify-between items-start">
          <div class="text-right mb-4 md:!mb-0">
            <span class="text-gray-700 text-2xl font-semibold ">Total Price: </span>
            <span class="text-2xl font-bold text-yellow-500">2000 EGP</span>
          </div>
          <button type="submit"
            class="bg-[#5D3500] text-white font-semibold py-4 px-8 !mt-4  hover:bg-brown-700 transition-colors">
            Confirm Enrollment
          </button>
        </div>
      </form>
    </Container>
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '@/components/base/Container.vue';

// Reactive state for password visibility
const showPassword = ref(false)
const showPasswordConfirm = ref(false)
const showCardNumber = ref(false)

// Reactive state for form data
const password = ref('')
const passwordConfirm = ref('')
const cardNumber = ref('')
</script>
