<template>
  <nav
    class="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50"
    data-aos="fade-down"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div
          class="flex-shrink-0 flex items-center text-xl font-bold text-blue-600"
        >
          مؤسسة كلين
        </div>

        <!-- Links - Large screens -->
        <div class="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-400"
            >الرئيسية</a
          >

          <a
            href="#services"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >خدماتنا</a
          >

          <a
            href="#portfolio"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >بعض اعمالنا</a
          >

          <a
            href="#"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >Contact</a
          >
        </div>

        <!-- Hamburger button -->
        <div class="flex items-center md:hidden transition">
          <button
            @click="toggleMenu"
            class="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Dropdown menu - Small screens -->
    <div
      v-if="isOpen"
      class="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-4 space-y-2"
    >
      <a
        href="#"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >Home</a
      >
      <a
        href="#"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >About</a
      >
      <a
        href="#"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >Services</a
      >
      <a
        href="#"
        class="block text-gray-700 dark:text-gray-300 hover:text-blue-500"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
