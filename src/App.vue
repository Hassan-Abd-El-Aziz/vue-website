<template>
  <Navbar />
  <div class="pt-20 p-4">
    <HomeSection />
    <ServicesSection />
  </div>
</template>

<script setup>
import HomeSection from "./components/HomeSection.vue";
import Navbar from "./components/Navbar.vue";
import ServicesSection from "./components/ServicesSection.vue";
</script>
