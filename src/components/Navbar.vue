<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow"
  >
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
      <div class="text-xl font-bold text-blue-600">
        <!-- Logo -->
        <div
          class="flex-shrink-0 flex items-center text-xl font-bold text-blue-600"
        >
          <a href="#">
            <img src="../assets/Logo.png" class="w-13 h-13" alt="" />
          </a>
        </div>
      </div>

      <!-- زر الهامبورجر -->
      <button
        @click="toggleSidebar"
        class="md:hidden text-gray-700 dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- روابط سطح المكتب -->
      <nav class="hidden md:flex gap-6 text-gray-700 dark:text-white">
        <a href="#home" class="hover:text-blue-600 transition">الرئيسية</a>
        <a href="#services" class="hover:text-blue-600 transition">خدماتنا</a>
        <a href="#portfolio" class="hover:text-blue-600 transition">أعمالنا</a>
        <a href="#location" class="hover:text-blue-600 transition">موقعنا</a>
        <a href="#contact" class="hover:text-blue-600 transition">تواصل معنا</a>
      </nav>
    </div>

    <!-- القائمة الجانبية للهامبورجر -->
    <transition name="slide">
      <aside
        v-if="sidebarOpen"
        class="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-50 p-6 md:hidden"
      >
        <button
          @click="toggleSidebar"
          class="mb-6 text-gray-600 dark:text-gray-300"
        >
          ✕ إغلاق
        </button>

        <nav class="flex flex-col gap-4 text-lg text-gray-800 dark:text-white">
          <a href="#home" @click="navigateAndClose">الرئيسية</a>
          <a href="#services" @click="navigateAndClose">خدماتنا</a>
          <a href="#portfolio" @click="navigateAndClose">أعمالنا</a>
          <a href="#location" @click="navigateAndClose">موقعنا</a>
          <a href="#contact" @click="navigateAndClose">تواصل معنا</a>
        </nav>
      </aside>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const navigateAndClose = () => {
  sidebarOpen.value = false;
};
</script>

<style scoped>
/* تحريك الشريحة */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
